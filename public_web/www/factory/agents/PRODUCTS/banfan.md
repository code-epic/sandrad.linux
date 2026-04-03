# BANFANB FIDEICOMISO - Sub-Agente

## Identificación

- **Nombre**: BANFANB fideicomiso
- **Alias**: `banfan`, `banfanb`
- **Tipo**: Sub-Agente (Product - gdoc)
- **Versión**: 1.0.0
- **Fecha**: 28/03/2026
- **Ubicación**: `/Users/crash/dev/orquestador/agents/PRODUCTS/banfan.md`

## Descripción

Dashboard para gestión de fideicomisos del Banco de la Fuerza Armada Nacional Bolivariana (BANFANB). Desarrollado con Angular y plantilla estilo Argon.

## Datos del Proyecto

| Campo | Valor |
|-------|-------|
| **Ruta** | `angular/products/banfanb/fideicomiso/` |
| **Tech Stack** | Angular 13+, Node.js 14+ |
| **Tipo** | gdoc (Gestión Documental) |
| **Organismo** | BANFANB |
| **Estado** | active |

## Características Técnicas

- **Template**: Argon-style
- **Gestión**: Fideicomisos
- **Dashboard**: Estadísticas y métricas
- **Integración**: Via Sandra Server

## Comandos de Build

```bash
# Instalación
cd $SANDRA_HOME/angular/products/banfanb/fideicomiso
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
sandra-factory sync banfan

# Estado
sandra-factory status banfan

# Análisis
sandra-factory analyze banfan
```

## Estructura de Archivos

```
angular/products/banfanb/fideicomiso/
├── src/
│   ├── app/
│   │   ├── fideicomiso/
│   │   ├── dashboard/
│   │   └── reportes/
│   └── environments/
├── angular.json
├── package.json
└── README.md
```

## Dependencias

- **Requiere**: Sandra Server (autenticación)
- **Provee**: Gestión de fideicomisos BANFANB

## README

- **Ubicación**: `angular/products/banfanb/fideicomiso/README.md`
- **Estado**: ✓ Existe

## Backup

```bash
# Comando
sandra-factory backup banfan

# Destino
$HOME/backup_sandra/YYYYMMDD_HHMMSS_products/banfan.tar.gz
```

## Skills Recomendadas

- Angular-Expert: `skills/angular-expert.md`

## Referencias

- Agente padre: `agents/SANDRA_FACTORY.md`
- Categoría: `agents/PRODUCTS/PRODUCTS.md`
