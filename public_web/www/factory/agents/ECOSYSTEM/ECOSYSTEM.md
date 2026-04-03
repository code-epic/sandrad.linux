# SANDRA ECOSYSTEM - Sub-Agente de Núcleo de Plataforma

## Identificación

- **Nombre**: SandraEcosystem
- **Tipo**: Sub-Agente (Categoría)
- **Versión**: 1.0.0
- **Fecha**: 28/03/2026
- **Ubicación**: `/Users/crash/dev/orquestador/agents/ECOSYSTEM/`

## Descripción

SandraEcosystem es la categoría de sub-agentes que gestiona el núcleo de la plataforma Sandra. Incluye 4 componentes fundamentales que trabajan en conjunto.

## Componentes

```
SandraEcosystem
├── Sandra Server (Go)          --> agents/ECOSYSTEM/server.md
├── Sandra Sentinel (Rust)     --> agents/ECOSYSTEM/sentinel.md
├── Sandra Console (Angular)    --> agents/ECOSYSTEM/console.md
└── Sandra Desktop (Tauri)     --> agents/ECOSYSTEM/desktop.md
```

## Comandos Rápidos

```bash
# Sincronizar todo el ecosistema
sandra-factory sync ecosystem

# Ver estado
sandra-factory status ecosystem

# Análisis
sandra-factory analyze ecosystem

# Backup
sandra-factory backup ecosystem
```

## Arquitectura de Comunicación

```
┌─────────────────────────────────────────────────────────────┐
│                    SandraEcosystem                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐      ┌─────────────┐      ┌─────────────┐ │
│  │   Server    │◄────►│  Sentinel   │      │   Console   │ │
│  │    (Go)     │      │   (Rust)    │      │  (Angular) │ │
│  └──────┬──────┘      └──────┬──────┘      └──────┬─────┘ │
│         │                    │                    │        │
│         │    gRPC :50051     │                    │        │
│         └──────────┬─────────┘                    │        │
│                    │                              │        │
│         REST 80/443/8443                          │        │
│                    │                              │        │
│                    └──────────────┬───────────────┘        │
│                                   │                        │
│                    ┌─────────────▼─────────────┐          │
│                    │       Desktop             │          │
│                    │       (Tauri)            │          │
│                    └───────────────────────────┘          │
└─────────────────────────────────────────────────────────────┘
```

## Skills Aplicables

| Proyecto | Skill Principal | Skill Secundario |
|----------|-----------------|------------------|
| Server | Go-Expert | - |
| Sentinel | Rust-Expert | Go-Expert |
| Console | Angular-Expert | - |
| Desktop | Rust-Expert | Angular-Expert |

## Estados Posibles

| Estado | Significado |
|--------|-------------|
| `active` | En desarrollo activo |
| `stable` | Versión estable |
| `deprecated` | En descontinuación |

## Notas de Operación

- El Server debe estar corriendo para que Console y Desktop funcionen
- Sentinel puede operar de forma independiente para cálculos
- Console se comunica exclusivamente vía REST con Server
- Desktop tiene SQLite local y sincroniza con Server

## Referencias

- Agente padre: `agents/SANDRA_FACTORY.md`
- Scripts: `shell/sandra-sync.sh`, `shell/sandra-backup.sh`
