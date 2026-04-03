# MPPD GDOC - Sub-Agente

## Identificación

- **Nombre**: MPPD gdoc
- **Alias**: `mppd`
- **Tipo**: Sub-Agente (Product - gdoc)
- **Versión**: 1.0.0
- **Fecha**: 28/03/2026
- **Ubicación**: `/Users/crash/dev/orquestador/agents/PRODUCTS/mppd.md`

## Descripción

Sistema de gestión de documentos para el Ministerio del Poder Popular para la Defensa (MPPD). Desarrollado con Angular.

## Datos del Proyecto

| Campo | Valor |
|-------|-------|
| **Ruta** | `angular/products/mppd/gdoc/` |
| **Tech Stack** | Angular 13+, Node.js 14+ |
| **Tipo** | gdoc (Gestión Documental) |
| **Organismo** | MPPD |
| **Estado** | active |

## Características Técnicas

- **Template**: gdoc standard
- **Gestión**: Documentos ministeriales
- **Flujo**: Control documental
- **Integración**: Via Sandra Server

## Comandos de Build

```bash
# Instalación
cd $SANDRA_HOME/angular/products/mppd/gdoc
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
sandra-factory sync mppd

# Estado
sandra-factory status mppd

# Análisis
sandra-factory analyze mppd
```

## Estructura de Archivos

```
angular/products/mppd/gdoc/
├── src/
│   ├── app/
│   │   ├── documento/
│   │   └── control/
│   └── environments/
├── angular.json
├── package.json
└── README.md
```

## Dependencias

- **Requiere**: Sandra Server (autenticación)
- **Provee**: Gestión documental MPPD

## README

- **Ubicación**: `angular/products/mppd/gdoc/README.md`
- **Estado**: ✓ Existe

## Backup

```bash
# Comando
sandra-factory backup mppd

# Destino
$HOME/backup_sandra/YYYYMMDD_HHMMSS_products/mppd.tar.gz
```

## Skills Recomendadas

- Angular-Expert: `skills/angular-expert.md`

## Referencias

- Agente padre: `agents/SANDRA_FACTORY.md`
- Categoría: `agents/PRODUCTS/PRODUCTS.md`
