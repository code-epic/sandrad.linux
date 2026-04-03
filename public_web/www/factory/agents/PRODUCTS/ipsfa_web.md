# IPSFA APP_WEB_IPSFA - Sub-Agente Secundario

## Identificación

- **Nombre**: IPSFA app_web_ipsfa
- **Alias**: `ipsfa_web`
- **Tipo**: Sub-Agente (Product - app_web)
- **Versión**: 1.0.0
- **Fecha**: 28/03/2026
- **Ubicación**: `/Users/crash/dev/orquestador/agents/PRODUCTS/ipsfa_web.md`

## Descripción

Aplicación web secundaria del IPSFA para gestión de servicios específicos. Incluye módulos de constancias, rutas y solicitudes.

## Datos del Proyecto

| Campo | Valor |
|-------|-------|
| **Ruta** | `angular/products/ipsfa/app_web_ipsfa/` |
| **Tech Stack** | Angular 13+ |
| **Tipo** | app_web |
| **Organismo** | IPSFA |
| **Estado** | active |

## Módulos Incluidos

| Módulo | Descripción |
|--------|-------------|
| Constancia de Afiliación | Generación de constancias |
| Hoja de Ruta | Gestión de rutas documentales |
| Hoja de Vida | Historial laboral |
| Solicitud de Medicamentos | Gestión farmacéutica |
| Constancia de Pensión | Certificaciones |

## Comandos de Build

```bash
# Instalación
cd $SANDRA_HOME/angular/products/ipsfa/app_web_ipsfa
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
sandra-factory sync ipsfa_web

# Estado
sandra-factory status ipsfa_web

# Análisis
sandra-factory analyze ipsfa_web
```

## Estructura de Archivos

```
angular/products/ipsfa/app_web_ipsfa/
├── src/
│   ├── app/
│   │   ├── constancias/
│   │   ├── hoja-ruta/
│   │   ├── hoja-vida/
│   │   ├── medicamentos/
│   │   └── pension/
│   └── environments/
├── angular.json
├── package.json
└── README.md
```

## Dependencias

- **Requiere**: Sandra Server (autenticación)
- **Provee**: Servicios específicos IPSFA
- **Relación**: Complementa SSSIFANB

## README

- **Ubicación**: `angular/products/ipsfa/app_web_ipsfa/README.md`
- **Estado**: ✓ Existe

## Backup

```bash
# Comando
sandra-factory backup ipsfa_web

# Destino
$HOME/backup_sandra/YYYYMMDD_HHMMSS_products/ipsfa_web.tar.gz
```

## Skills Recomendadas

- Angular-Expert: `skills/angular-expert.md`

## Referencias

- Agente padre: `agents/SANDRA_FACTORY.md`
- Categoría: `agents/PRODUCTS/PRODUCTS.md`
- IPSFA principal: `agents/PRODUCTS/ipsfa_main.md`
