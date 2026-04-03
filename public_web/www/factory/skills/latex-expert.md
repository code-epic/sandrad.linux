# LATEX-EXPERT SKILL

## Identificación

- **Nombre**: LaTeX-Expert
- **Tipo**: Skill Técnica
- **Versión**: 1.0.0
- **Fecha**: 28/03/2026
- **Ubicación**: `/Users/crash/dev/orquestador/skills/latex-expert.md`

## Descripción

Skill especializada en LaTeX para documentación técnica, utilizada por el proyecto de Manuales.

## Estructura de Proyecto

```
man/
├── main.tex
├── capitulos/
│   ├── introduccion.tex
│   ├── arquitectura.tex
│   └── api.tex
├── imagenes/
│   ├── diagrama1.png
│   └── screenshot.png
├── bibliografia/
│   └── referencias.bib
└── agentes/
    └── sandra-build.sh
```

## Plantilla Básica

```latex
\documentclass[12pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage[spanish]{babel}
\usepackage{graphicx}
\usepackage{hyperref}
\usepackage{minted}

\title{Sandra Ecosystem - Manual Técnico}
\author{Carlos Peña}
\date{\today}

\begin{document}

\maketitle
\tableofcontents
\newpage

\section{Introducción}
Este documento describe...

\section{Instalación}
\subsection{Requisitos}
\begin{itemize}
    \item Go 1.24+
    \item Node.js 14+
    \item Rust 2021
\end{itemize}

\end{document}
```

## Comandos de Compilación

```bash
# Compilar con XeLaTeX (recomendado para UTF-8)
xelatex -interaction=nonstopmode -shell-escape main.tex

# Script de build
./agentes/sandra-build.sh
./agentes/sandra-build.sh -c  # Limpiar archivos auxiliares
```

## Paquetes Comunes

```latex
% Gráficos y figuras
\usepackage{graphicx}
\usepackage{float}

% Código fuente
\usepackage{minted}
\usemintedstyle{tango}

% Tablas
\usepackage{tabularx}
\usepackage{booktabs}

% Referencias
\usepackage{hyperref}
\hypersetup{
    colorlinks=true,
    linkcolor=blue,
    filecolor=magenta,
    urlcolor=cyan,
}

% Diagramas (con TikZ)
\usepackage{tikz}
\usetikzlibrary{arrows,positioning,shapes}
```

## Ejemplo de Diagrama TikZ

```latex
\begin{figure}[H]
\centering
\begin{tikzpicture}[node distance=2cm, auto]
    \node[block] (server) {Sandra Server};
    \node[block, right of=server] (sentinel) {Sandra Sentinel};
    \node[block, below of=server] (console) {Sandra Console};
    
    \draw[->] (console) -- (server);
    \draw[<->] (server) -- (sentinel);
\end{tikzpicture}
\caption{Arquitectura del Ecosistema}
\end{figure}
```

## Referencias con BibTeX

```bibtex
@article{ley2015,
    title={Ley del Seguro Social},
    author={Gobierno Bolivariano de Venezuela},
    year={2015},
    note={Gaceta Oficial N° 6.209 Extraordinario}
}
```

```latex
\section{Referencias}
\bibliographystyle{plain}
\bibliography{bibliografia/referencias}
```

## Build Script

```bash
#!/bin/bash
#======================================================================
# SANDRA-BUILD - Compila manuales LaTeX
#======================================================================
set -e

MAN_DIR="$(dirname "$0")/.."
cd "$MAN_DIR"

xelatex -interaction=nonstopmode -shell-escape main.tex
makeindex main.idx
xelatex -interaction=nonstopmode -shell-escape main.tex
xelatex -interaction=nonstopmode -shell-escape main.tex
```

## Recomendaciones

1. Usar `xelatex` para mejor soporte UTF-8
2. Compilar 2-3 veces para referencias cruzadas
3. Usar `-shell-escape` solo en entornos confiables
4. Mantener imágenes en carpeta `/imagenes/`

## Referencias

- Agente padre: `agents/SANDRA_FACTORY.md`
- Proyecto: `man/`
