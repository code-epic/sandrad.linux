# SANDRA DESKTOP - Sub-Agente

## Identificación

- **Nombre**: Sandra Desktop Container
- **Alias**: `desktop`
- **Tipo**: Sub-Agente (Desktop Application)
- **Versión**: 1.0.0
- **Fecha**: 28/03/2026
- **Ubicación**: `/Users/crash/dev/orquestador/agents/ECOSYSTEM/desktop.md`

## Descripción

Sandra Desktop es el contenedor de aplicaciones de escritorio. Construido con Tauri 2.0, combina Rust (backend) con Angular Standalone (frontend), proporcionando una plataforma segura de orquestación.

## Datos del Proyecto

| Campo | Valor |
|-------|-------|
| **Ruta** | `rust/sandra-desktop-container/` |
| **Tech Stack** | Tauri 2.0, Rust 2021, Angular 16+ |
| **Tipo** | Desktop Application |
| **Estado** | active |

## Características Técnicas

- **Backend**: Rust con SQLite Cipher
- **Frontend**: Angular Standalone
- **Seguridad**: AES-256-GCM encryption
- **Almacenamiento**: SQLite local cifrado
- **Sistema Trazabilidad**: "Alquimia Invisible"

## Comandos de Build

```bash
# Desarrollo
cd $SANDRA_HOME/rust/sandra-desktop-container
npm run build

# Producción
npm run build:release
npm run tauri build

# macOS específico
./build_macos.sh
```

## Comandos de Sincronización

```bash
# Sincronizar
sandra-factory sync desktop

# Estado
sandra-factory status desktop

# Análisis
sandra-factory analyze desktop
```

## Métricas de Código

```bash
# Backend Rust
find rust/sandra-desktop-container/src-tauri -name "*.rs" | xargs wc -l

# Frontend Angular
find rust/sandra-desktop-container/src -name "*.ts" | xargs wc -l

# Lint
npm run lint
cargo clippy
```

## Estructura de Archivos

```
rust/sandra-desktop-container/
├── src-tauri/
│   ├── src/
│   │   ├── main.rs
│   │   ├── lib.rs
│   │   └── commands/
│   ├── Cargo.toml
│   └── tauri.conf.json
├── src/
│   ├── app/
│   └── environments/
├── package.json
└── README.md
```

## Dependencias

- **Requiere**: Sandra Server (API REST)
- **Provee**: Aplicación desktop standalone
- **Local**: SQLite Cipher con AES-256-GCM

## Convenciones de Código

- **Rust**: snake_case, Result<T, E>, document unsafe
- **Angular**: Standalone components, signals, OnPush
- **Seguridad**: No storing of secrets in plain text

## README

- **Ubicación**: `rust/sandra-desktop-container/README.md`
- **Estado**: ✓ Existe (262 líneas)

## Backup

```bash
# Comando
sandra-factory backup desktop

# Destino
$HOME/backup_sandra/YYYYMMDD_HHMMSS_[tipo]/desktop.tar.gz

# Nota: Excluir node_modules, src-tauri/target
```

## Skills Recomendadas

- Rust-Expert: `skills/rust-expert.md`
- Angular-Expert: `skills/angular-expert.md`

## Referencias

- Agente padre: `agents/SANDRA_FACTORY.md`
- Categoría: `agents/ECOSYSTEM/ECOSYSTEM.md`
- AGENTS.md: `AGENTS.md`
