# IPSFA SSSIFANB - Sub-Agente Principal

## Identificación

- **Nombre**: IPSFA SSSIFANB
- **Alias**: `ipsfa`, `ipsfa_main`, `sssifanb`
- **Tipo**: Sub-Agente (Product - app_web Principal)
- **Versión**: 1.0.0
- **Fecha**: 28/03/2026
- **Ubicación**: `/Users/crash/dev/orquestador/agents/PRODUCTS/ipsfa_main.md`

## Descripción

Sistema de Seguridad Social Integral de la Fuerza Armada Nacional Bolivariana (SSSIFANB). Plataforma completa del IPSFA con múltiples módulos de gestión de seguridad social.

## Datos del Proyecto

| Campo | Valor |
|-------|-------|
| **Ruta** | `angular/products/ipsfa/sssifanb/` |
| **Tech Stack** | Angular 13+ |
| **Tipo** | app_web (Principal) |
| **Organismo** | IPSFA |
| **Estado** | active |

## Módulos Incluidos

| Módulo | Descripción |
|--------|-------------|
| Afiliación | Gestión de afiliados |
| Prestaciones Sociales | Cálculo y gestión de prestaciones |
| Nómina de Pensionados | Gestión de nóminas |
| Indicadores | Dashboard de métricas |

## Comandos de Build

```bash
# Instalación
cd $SANDRA_HOME/angular/products/ipsfa/sssifanb
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
sandra-factory sync ipsfa

# Estado
sandra-factory status ipsfa

# Análisis
sandra-factory analyze ipsfa
```

## Estructura de Archivos

```
angular/products/ipsfa/sssifanb/
├── src/
│   ├── app/
│   │   ├── afiliacion/
│   │   ├── prestaciones/
│   │   ├── nomina/
│   │   └── indicadores/
│   └── environments/
├── angular.json
├── package.json
└── README.md
```

## Dependencias

- **Requiere**: Sandra Server (autenticación, API)
- **Provee**: Sistema integral IPSFA
- **Integración**: Sandra Sentinel (cálculos nóminas)

## README

- **Ubicación**: `angular/products/ipsfa/sssifanb/README.md`
- **Estado**: ✓ Existe (214 líneas)

## Backup

```bash
# Comando
sandra-factory backup ipsfa

# Destino
$HOME/backup_sandra/YYYYMMDD_HHMMSS_products/ipsfa_main.tar.gz
```

## Skills Recomendadas

- Angular-Expert: `skills/angular-expert.md`

## Referencias

- Agente padre: `agents/SANDRA_FACTORY.md`
- Categoría: `agents/PRODUCTS/PRODUCTS.md`
- IPSFA secundario: `agents/PRODUCTS/ipsfa_web.md`
