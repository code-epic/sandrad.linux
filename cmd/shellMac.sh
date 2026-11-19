#!/usr/bin/env bash
#======================================================================
# SANDRA SERVER - Script de Escaneo e Indexación de Archivos (macOS)
# Formato de salida: MD5;DIR;BASENAME;MIME;PARAS;FECHA;PESO;RIF
# Parámetros:
#   $ruta  : Directorio raíz a escanear (suministrado por Sandra)
#======================================================================

ruta="${ruta:-$1}"
ruta="${ruta%%/}"

find "$ruta" -type f -print0 | while IFS= read -r -d '' ln; do
    # 1. MD5 (BSD md5 -q) y tipo de archivo
    md=$(md5 -q "$ln")
    fl=$(file -b "$ln" | tr ';' ':')

    # 2. Extracción nativa en Bash
    bs="${ln##*/}"
    if [[ "$ln" == */* ]]; then
        dirn="${ln%%/}"
        dirn="${dirn%/*}"
        [[ -z "$dirn" ]] && dirn="/"
    else
        dirn="."
    fi
    sin_ext="${bs%.*}"

    IFS='_' read -ra parts <<< "$sin_ext"
    num_parts=${#parts[@]}
    p1="${parts[0]}"
    p3="${parts[2]}"
    p4="${parts[3]}"
    p_last=""
    if (( num_parts > 0 )); then
        p_last="${parts[$((num_parts-1))]}"
    fi
    para="$p1;$p3;$p4;$p_last"

    # 3. Tamaño exacto en bytes y fecha formateada en un solo stat (BSD stat)
    stat_out=$(stat -f "%z;%Sm" -t "%Y-%m-%d %H:%M:%S" "$ln")
    peso="${stat_out%%;*}"
    fecha="${stat_out#*;}"

    # 4. Extracción y limpieza del RIF (ej: "V 1.999.999-0" -> "V19999990")
    if [[ "$dirn" == "$ruta" ]]; then
        primer_dir=""
    else
        rel="${dirn#"$ruta"/}"
        primer_dir="${rel%%/*}"
    fi

    if [[ "$primer_dir" == *_* ]]; then
        rif_raw="${primer_dir#*_}"
    else
        rif_raw="$primer_dir"
    fi
    rif=$(printf '%s' "$rif_raw" | tr -d ' .-' | tr '[:lower:]' '[:upper:]')

    printf '%s;%s;%s;%s;%s;%s;%s;%s\n' "$md" "$dirn" "$bs" "$fl" "$para" "$fecha" "$peso" "$rif"
done

