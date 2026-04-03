# SANDRA SENTINEL - Sub-Agente

## Identificación

- **Nombre**: Sandra Sentinel
- **Alias**: `sentinel`
- **Tipo**: Sub-Agente (Motor de Cálculo)
- **Versión**: 1.0.0
- **Fecha**: 28/03/2026
- **Ubicación**: `/Users/crash/dev/orquestador/agents/ECOSYSTEM/sentinel.md`

## Descripción

Sandra Sentinel es el motor de cálculo de alto rendimiento. Construido en Rust con arquitectura hexagonal (Ports & Adapters), procesa nóminas masivas usando métodos estocástico-deterministas.

## Datos del Proyecto

| Campo | Valor |
|-------|-------|
| **Ruta** | `rust/sandra.sentinel/` |
| **Tech Stack** | Rust 2021 |
| **Puerto** | 50051 (gRPC) |
| **Tipo** | Motor de Cálculo |
| **Estado** | active |

## Características Técnicas

- **Arquitectura**: Hexagonal (Ports & Adapters)
- **Comunicación**: gRPC con Protobuf v3
- **Async**: Tokio runtime
- **Protocolo**: Protobuf v3
- **Propósito**: Cálculo estocástico-determinista de nóminas

## Comandos de Build

```bash
# Desarrollo
cd $SANDRA_HOME/rust/sandra.sentinel
cargo build

# Release
cargo build --release

# Tests
cargo test --package core
cargo test --package cli --bin cli
```

## Comandos de Sincronización

```bash
# Sincronizar
sandra-factory sync sentinel

# Estado
sandra-factory status sentinel

# Análisis
sandra-factory analyze sentinel
```

## Métricas de Código

```bash
# Líneas de código
find rust/sandra.sentinel -name "*.rs" | xargs wc -l

# Tests
cargo test nombre_test -- --exact

# Lint
cargo clippy
```

## Estructura de Archivos

```
rust/sandra.sentinel/
├── src/
│   ├── lib.rs
│   ├── core/           # Domain
│   ├── ports/          # Interfaces
│   └── adapters/       # Implementations
├── proto/
│   └── sentinel.proto
├── Cargo.toml
└── README.md
```

## Dependencias

- **Requiere**: Ninguno (motor standalone)
- **Provee**: gRPC services para Server
- **Clientes**: Sandra Server (gRPC), Products (vía Server)

## Convenciones de Código

- **Naming**: snake_case (functions), CamelCase (types), SCREAMING_SNAKE_CASE (consts)
- **Errores**: Use `Result<T, E>`, propagate with `?`
- **Seguridad**: Prefer safe code, document unsafe blocks
- **Async**: Use tokio, mark async functions clearly

## README

- **Ubicación**: `rust/sandra.sentinel/README.md`
- **Estado**: ✓ Existe (410 líneas)

## Backup

```bash
# Comando
sandra-factory backup sentinel

# Destino
$HOME/backup_sandra/YYYYMMDD_HHMMSS_[tipo]/sentinel.tar.gz
```

## Skills Recomendadas

- Rust-Expert: `skills/rust-expert.md`
- Go-Expert: `skills/go-expert.md` (para integración)

## Referencias

- Agente padre: `agents/SANDRA_FACTORY.md`
- Categoría: `agents/ECOSYSTEM/ECOSYSTEM.md`
- AGENTS.md: `AGENTS.md`
