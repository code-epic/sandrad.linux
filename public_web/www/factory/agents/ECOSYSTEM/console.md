# SANDRA CONSOLE - Sub-Agente

## Identificación

- **Nombre**: Sandra Console
- **Alias**: `console`, `ui`
- **Tipo**: Sub-Agente (Frontend)
- **Versión**: 1.0.0
- **Fecha**: 28/03/2026
- **Ubicación**: `/Users/crash/dev/orquestador/agents/ECOSYSTEM/console.md`

## Descripción

Sandra Console es el panel administrativo de la plataforma. Construido en Angular Standalone, proporciona la interfaz de control del ecosistema Sandra.

## Datos del Proyecto

| Campo | Valor |
|-------|-------|
| **Ruta** | `angular/code-epic.io/v2consola/` |
| **Tech Stack** | Angular 16+ |
| **Puerto Dev** | 4200 |
| **Tipo** | Frontend (SPA) |
| **Estado** | active |

## Características Técnicas

- **Framework**: Angular Standalone Components
- **UI Library**: Argon-style template
- **Comunicación**: REST API con Server
- **Módulos**: Login, Principal, Redes, Herramientas, Aplicaciones, Seguridad

## Comandos de Build

```bash
# Desarrollo
cd $SANDRA_HOME/angular/code-epic.io/v2consola
npm run start

# Producción
npm run build:prod

# Tests
npm run test
ng test --include='**/componente.spec.ts'
ng test --watch=false --browsers=ChromeHeadless
```

## Comandos de Sincronización

```bash
# Sincronizar
sandra-factory sync console

# Estado
sandra-factory status console

# Análisis
sandra-factory analyze console
```

## Métricas de Código

```bash
# Líneas de código
find angular/code-epic.io/v2consola/src -name "*.ts" | xargs wc -l

# Lint
npm run lint
ng lint
```

## Estructura de Archivos

```
angular/code-epic.io/v2consola/
├── src/
│   ├── app/
│   │   ├── login/
│   │   ├── principal/
│   │   ├── redes/
│   │   ├── herramientas/
│   │   ├── aplicaciones/
│   │   └── seguridad/
│   └── environments/
├── angular.json
├── package.json
└── README.md
```

## Dependencias

- **Requiere**: Sandra Server (API REST)
- **Provee**: UI para administración
- **Autenticación**: Via Server

## Convenciones de Código

- **Imports**: Angular → third-party → local (alphabetical within groups)
- **Naming**: camelCase (variables/functions), PascalCase (classes), kebab-case (files)
- **Tipos**: Explicit types, avoid `any`, use interfaces
- **Componentes**: Small, focused, OnPush when possible
- **Servicios**: Singletons, injectable, handle errors gracefully

## README

- **Ubicación**: `angular/code-epic.io/v2consola/README.md`
- **Estado**: ✓ Existe (187 líneas)

## Backup

```bash
# Comando
sandra-factory backup console

# Destino
$HOME/backup_sandra/YYYYMMDD_HHMMSS_[tipo]/console.tar.gz
```

## Skills Recomendadas

- Angular-Expert: `skills/angular-expert.md`

## Referencias

- Agente padre: `agents/SANDRA_FACTORY.md`
- Categoría: `agents/ECOSYSTEM/ECOSYSTEM.md`
- AGENTS.md: `AGENTS.md`
