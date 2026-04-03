# BDV GDOC.PROCEEDINGS - Sub-Agente

## Identificación

- **Nombre**: BDV gdoc.proceedings
- **Alias**: `bdv`
- **Tipo**: Sub-Agente (Product - gdoc)
- **Versión**: 1.0.0
- **Fecha**: 28/03/2026
- **Ubicación**: `/Users/crash/dev/orquestador/agents/PRODUCTS/bdv.md`

## Descripción

Sistema de gestión de expedientes documentales para el Banco de Venezuela (BDV). Desarrollado con Angular y plantilla estilo Argon.

## Datos del Proyecto

| Campo | Valor |
|-------|-------|
| **Ruta** | `angular/products/bdv/gdoc.proceedings/` |
| **Tech Stack** | Angular 13+, Node.js 14+ |
| **Tipo** | gdoc (Gestión Documental) |
| **Organismo** | Banco de Venezuela |
| **Estado** | active |

## Características Técnicas

- **Template**: Argon-style
- **Gestión**: Expedientes documentales
- **Flujo**: Aprobación de documentos
- **Integración**: Via Sandra Server

## Comandos de Build

```bash
# Instalación
cd $SANDRA_HOME/angular/products/bdv/gdoc.proceedings
npm install

# Desarrollo
npm start
ng serve

# Producción
npm run build:prod
```

## Comandos de Sincronización

```bash
# Sincronizar
sandra-factory sync bdv

# Estado
sandra-factory status bdv

# Análisis
sandra-factory analyze bdv
```

## Estructura de Archivos

```
angular/products/bdv/gdoc.proceedings/
├── src/
│   ├── app/
│   │   ├── expediente/
│   │   ├── documento/
│   │   └── workflow/
│   └── environments/
├── angular.json
├── package.json
└── README.md
```

## Dependencias

- **Requiere**: Sandra Server (autenticación)
- **Provee**: Gestión documental BDV

## README

- **Ubicación**: `angular/products/bdv/gdoc.proceedings/README.md`
- **Estado**: ✓ Existe

## Backup

```bash
# Comando
sandra-factory backup bdv

# Destino
$HOME/backup_sandra/YYYYMMDD_HHMMSS_products/bdv.tar.gz
```

## Skills Recomendadas

- Angular-Expert: `skills/angular-expert.md`

## Referencias

- Agente padre: `agents/SANDRA_FACTORY.md`
- Categoría: `agents/PRODUCTS/PRODUCTS.md`
