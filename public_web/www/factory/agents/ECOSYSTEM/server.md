# SANDRA SERVER - Sub-Agente

## Identificación

- **Nombre**: Sandra Server
- **Alias**: `server`
- **Tipo**: Sub-Agente (Backend)
- **Versión**: 1.0.0
- **Fecha**: 28/03/2026
- **Ubicación**: `/Users/crash/dev/orquestador/agents/ECOSYSTEM/server.md`

## Descripción

Sandra Server es el middleware/ESB de la plataforma. Construido en Go con arquitectura Zero-Trust, conecta aplicaciones distribuidas y proporciona servicios centralizados.

## Datos del Proyecto

| Campo | Valor |
|-------|-------|
| **Ruta** | `go/sandra/` |
| **Tech Stack** | Go 1.24.3 |
| **Puertos** | 80, 443, 8443 |
| **Tipo** | Backend/Middleware |
| **Estado** | active |

## Características Técnicas

- **Arquitectura**: Zero-Trust
- **Comunicación**: REST API, WebSockets (WSHub)
- **Seguridad**: Criptografía AES-256
- **Integraciones**: gRPC con Sentinel
- **Gestión Documental**: ModulosAPP

## Comandos de Build

```bash
# Desarrollo
cd $SANDRA_HOME/go/sandra && go run core/core.go

# Build producción
./compile.sh -a amd64 -o linux
./compile.sh -a arm64 -o darwin

# Build manual
go build -ldflags "-X core/system.Version=1.0.0" -o sandrad core/core.go
```

## Comandos de Sincronización

```bash
# Sincronizar
sandra-factory sync server

# Estado
sandra-factory status server

# Análisis
sandra-factory analyze server
```

## Métricas de Código

```bash
# Líneas de código
find go/sandra -name "*.go" -not -path "*/vendor/*" | xargs wc -l

# Tests
go test -v ./core/model -run TestNombreFuncion

# Lint
gofmt -w .
golangci-lint run
```

## Estructura de Archivos

```
go/sandra/
├── core/
│   ├── core.go           # Entry point
│   ├── system/
│   │   └── version.go
│   ├── router/
│   │   └── routes.go
│   └── handlers/
├── config/
│   └── sandra.ini
└── compile.sh
```

## Dependencias

- **Requiere**: Ninguno (es el servidor central)
- **Provee**: API REST para Console, Desktop, Products
- **gRPC**: Se conecta a Sentinel en puerto 50051

## Convenciones de Código

- **Imports**: stdlib → third-party → local modules
- **Naming**: PascalCase (exports), camelCase (internal)
- **Errores**: Return errors, use `fmt.Errorf()` con contexto
- **Concurrencia**: Channels, avoid shared state

## README

- **Ubicación**: `go/sandra/README.md`
- **Estado**: ✓ Existe (310 líneas)

## Backup

```bash
# Comando
sandra-factory backup server

# Destino
$HOME/backup_sandra/YYYYMMDD_HHMMSS_[tipo]/server.tar.gz
```

## Skills Recomendadas

- Go-Expert: `skills/go-expert.md`

## Referencias

- Agente padre: `agents/SANDRA_FACTORY.md`
- Categoría: `agents/ECOSYSTEM/ECOSYSTEM.md`
- AGENTS.md: `AGENTS.md`
