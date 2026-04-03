# SANDRA CONTAB ERP - Sub-Agente

## Identificación

- **Nombre**: Sandra Contab ERP
- **Alias**: `contabapp`, `flutter`
- **Tipo**: Sub-Agente (Product - ERP)
- **Versión**: 1.0.0
- **Fecha**: 28/03/2026
- **Ubicación**: `/Users/crash/dev/orquestador/agents/PRODUCTS/contabapp.md`

## Descripción

ERP contable para Venezuela desarrollado con Flutter. Transforma la gestión contable venezolana con normativa tributaria automática, multi-empresa, inteligencia de datos y cumplimiento laboral.

## Datos del Proyecto

| Campo | Valor |
|-------|-------|
| **Ruta** | `flutter/sandra_contab_erp/` |
| **Tech Stack** | Flutter |
| **Tipo** | ERP (Especial) |
| **Categoría** | SandraContabapp |
| **Estado** | active |

## Características Técnicas

- **Framework**: Flutter
- **Normativa**: Tributaria venezolana
- **Multi-empresa**: Soporte
- **Inteligencia**: Datos y análisis
- **Cumplimiento**: Laboral y contable

## Comandos de Build

```bash
# Desarrollo
cd $SANDRA_HOME/flutter/sandra_contab_erp
flutter run

# Producción
flutter build apk
flutter build ios

# Web
flutter build web
```

## Comandos de Sincronización

```bash
# Sincronizar
sandra-factory sync contabapp

# Estado
sandra-factory status contabapp

# Análisis
sandra-factory analyze contabapp
```

## Estructura de Archivos

```
flutter/sandra_contab_erp/
├── lib/
│   ├── main.dart
│   ├── screens/
│   ├── models/
│   └── services/
├── pubspec.yaml
└── README.md
```

## Dependencias

- **Requiere**: Ninguno (standalone)
- **Provee**: ERP contable completo

## README

- **Ubicación**: `flutter/sandra_contab_erp/README.md`
- **Estado**: ✓ Existe

## Backup

```bash
# Comando
sandra-factory backup contabapp

# Destino
$HOME/backup_sandra/YYYYMMDD_HHMMSS_contabapp/contabapp.tar.gz
```

## Skills Recomendadas

- Flutter-Expert: `skills/flutter-expert.md`

## Notas

- Es el único proyecto que NO es parte del SandraEcosystem
- Pertenece a la categoría especial "SandraContabapp"
- Funciona de forma independiente

## Referencias

- Agente padre: `agents/SANDRA_FACTORY.md`
