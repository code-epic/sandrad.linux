#!/usr/bin/env bash
#======================================================================
# SANDRA SERVER - Script de Escaneo e Indexación de Archivos (Linux)
# Formato de salida: MD5;DIR;BASENAME;MIME;PARAS;FECHA;PESO;RIF
# Parámetros:
#   $ruta  : Directorio raíz a escanear (suministrado por Sandra)
#======================================================================

ruta="${ruta:-$1}"
ruta="${ruta%%/}"

find "$ruta" -type f -print0 | while IFS= read -r -d '' ln; do
    # 1. MD5 y MIME/Tipo en una sola pasada mínima
    read -r md _ < <(md5sum "$ln")
    fl=$(file -b "$ln" | tr ';' ':')

    # 2. Extracción nativa en Bash (sin subshells ni pipes)
    bs="${ln##*/}"
    dirn="${ln%/*}"
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

    # 3. Tamaño en bytes y fecha formateada en un solo stat (GNU coreutils)
    stat_out=$(stat -c "%s;%y" "$ln")
    peso="${stat_out%%;*}"
    fecha_raw="${stat_out#*;}"
    fecha="${fecha_raw:0:19}"

    # 4. Extracción y limpieza del RIF (ej: "V 1.999.999-0" -> "V19999990")
    rel="${dirn#"$ruta"/}"
    primer_dir="${rel%%/*}"
    if [[ "$primer_dir" == *_* ]]; then
        rif_raw="${primer_dir#*_}"
    else
        rif_raw="$primer_dir"
    fi
    rif=$(printf '%s' "$rif_raw" | tr -d ' .-' | tr '[:lower:]' '[:upper:]')

    printf '%s;%s;%s;%s;%s;%s;%s;%s\n' "$md" "$dirn" "$bs" "$fl" "$para" "$fecha" "$peso" "$rif"
done

