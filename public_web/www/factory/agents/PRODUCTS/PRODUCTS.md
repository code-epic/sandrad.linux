# SANDRA PRODUCTS - Sub-Agente de Organismos Gubernamentales

## Identificación

- **Nombre**: SandraProducts
- **Tipo**: Sub-Agente (Categoría)
- **Versión**: 1.0.0
- **Fecha**: 28/03/2026
- **Ubicación**: `/Users/crash/dev/orquestador/agents/PRODUCTS/`

## Descripción

SandraProducts es la categoría de sub-agentes que gestiona los productos desenvolvidos para organismos gubernamentales venezolanos. Incluye sistemas de gestión documental (gdoc) y aplicaciones web.

## Componentes

```
SandraProducts
├── BDV gdoc.proceedings      --> agents/PRODUCTS/bdv.md
├── BANFANB fideicomiso      --> agents/PRODUCTS/banfan.md
├── MPPD gdoc                 --> agents/PRODUCTS/mppd.md
├── IPSFA SSSIFANB (main)    --> agents/PRODUCTS/ipsfa_main.md
├── IPSFA app_web_ipsfa      --> agents/PRODUCTS/ipsfa_web.md
└── Ejército gdoc.ejercito   --> agents/PRODUCTS/ejercito.md
```

## Comandos Rápidos

```bash
# Sincronizar todos los productos
sandra-factory sync products

# Ver estado
sandra-factory status products

# Análisis
sandra-factory analyze products

# Backup
sandra-factory backup products
```

## Tipos de Productos

### gdoc (Gestión Documental)
- Plantilla estilo Argon
- Angular 13+ con node_modules 14+
- Manejo de expedientes documentales
- Flujo de aprobación de documentos

### app_web (Aplicación Web)
- Módulos específicos por organismo
- Integración con APIs del Server
- Gestión de información especializada

## Organismos Atendidos

| Organismo | Tipo | Descripción |
|-----------|------|-------------|
| BDV | gdoc | Banco de Venezuela - Expedientes |
| BANFANB | gdoc | Banco de la Fuerza Armada - Fideicomisos |
| MPPD | gdoc | Ministerio del Poder Popular para la Defensa |
| IPSFA | app_web | Instituto de Previsión Social FANB |
| Ejército | gdoc | Gestión documental del Ejército |

## Arquitectura de Comunicación

```
┌─────────────────────────────────────────────────────────────┐
│                    SandraProducts                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────────────────────────────────────────────┐   │
│   │              Sandra Server (API)                     │   │
│   └─────────────────────────────────────────────────────┘   │
│                         ▲                                    │
│                         │                                    │
│    ┌────────────────────┼────────────────────┐             │
│    │                    │                    │             │
│    ▼                    ▼                    ▼             │
│ ┌──────┐          ┌──────────┐         ┌─────────┐       │
│ │ BDV  │          │ BANFANB  │         │  MPPD   │       │
│ │ gdoc │          │ fideicomiso│        │  gdoc   │       │
│ └──────┘          └──────────┘         └─────────┘       │
│                                                             │
│    ┌────────────────────────────────────────────┐         │
│    │                    IPSFA                    │         │
│    │  ┌─────────────┐    ┌─────────────────┐    │         │
│    │  │  SSSIFANB   │    │  app_web_ipsfa  │    │         │
│    │  │ (principal) │    │  (constancias)  │    │         │
│    │  └─────────────┘    └─────────────────┘    │         │
│    └────────────────────────────────────────────┘         │
│                                                             │
│                         ┌─────────┐                        │
│                         │Ejército │                        │
│                         │gdoc.ejer│                        │
│                         └─────────┘                        │
└─────────────────────────────────────────────────────────────┘
```

## Skills Aplicables

| Proyecto | Skill Principal |
|----------|------------------|
| Todos | Angular-Expert |

## Estados Posibles

| Estado | Significado |
|--------|-------------|
| `active` | En desarrollo/uso activo |
| `maintenance` | Solo mantenimiento |
| `deprecated` | En descontinuación |

## Convenciones de Commit

```
feat: agregar módulo de X [organismo]
fix: corregir Y [organismo]
docs: actualizar documentación [organismo]
sync: actualización [organismo] [timestamp]
```

## Referencias

- Agente padre: `agents/SANDRA_FACTORY.md`
- Scripts: `shell/sandra-sync.sh`, `shell/sandra-backup.sh`
