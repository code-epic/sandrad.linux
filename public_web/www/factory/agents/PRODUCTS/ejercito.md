# EJÉRCITO GDOC.EJERCITO - Sub-Agente

## Identificación

- **Nombre**: Ejército gdoc.ejercito
- **Alias**: `ejercito`, `ejercito_gdoc`
- **Tipo**: Sub-Agente (Product - gdoc)
- **Versión**: 1.0.0
- **Fecha**: 28/03/2026
- **Ubicación**: `/Users/crash/dev/orquestador/agents/PRODUCTS/ejercito.md`

## Descripción

Sistema de gestión documental para el Ejército Nacional Bolivariano. Desarrollado con Angular.

## Datos del Proyecto

| Campo | Valor |
|-------|-------|
| **Ruta** | `angular/products/ejercito/gdoc.ejercito/` |
| **Tech Stack** | Angular 13+ |
| **Tipo** | gdoc (Gestión Documental) |
| **Organismo** | Ejército |
| **Estado** | active |

## Características Técnicas

- **Template**: gdoc standard
- **Gestión**: Documentos castrenses
- **Flujo**: Control y archivo documental
- **Integración**: Via Sandra Server

## Comandos de Build

```bash
# Instalación
cd $SANDRA_HOME/angular/products/ejercito/gdoc.ejercito
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
sandra-factory sync ejercito

# Estado
sandra-factory status ejercito

# Análisis
sandra-factory analyze ejercito
```

## Estructura de Archivos

```
angular/products/ejercito/gdoc.ejercito/
├── src/
│   ├── app/
│   │   ├── documento/
│   │   └── archivo/
│   └── environments/
├── angular.json
├── package.json
└── README.md
```

## Dependencias

- **Requiere**: Sandra Server (autenticación)
- **Provee**: Gestión documental Ejército

## README

- **Ubicación**: `angular/products/ejercito/gdoc.ejercito/README.md`
- **Estado**: ✓ Existe

## Backup

```bash
# Comando
sandra-factory backup ejercito

# Destino
$HOME/backup_sandra/YYYYMMDD_HHMMSS_products/ejercito.tar.gz
```

## Skills Recomendadas

- Angular-Expert: `skills/angular-expert.md`

## Referencias

- Agente padre: `agents/SANDRA_FACTORY.md`
- Categoría: `agents/PRODUCTS/PRODUCTS.md`
