# GO-EXPERT SKILL

## Identificación

- **Nombre**: Go-Expert
- **Tipo**: Skill Técnica
- **Versión**: 1.0.0
- **Fecha**: 28/03/2026
- **Ubicación**: `/Users/crash/dev/orquestador/skills/go-expert.md`

## Descripción

Skill especializada en el lenguaje de programación Go, utilizada por el proyecto Sandra Server.

## Convenciones de Código

### Imports

```go
import (
    // 1. Librería estándar
    "fmt"
    "io/ioutil"
    "encoding/json"
    
    // 2. Paquetes de terceros
    "github.com/gin-gonic/gin"
    "github.com/spf13/viper"
    
    // 3. Módulos locales
    "sandra/core/system"
    "sandra/core/router"
)
```

### Naming

- **Exports**: PascalCase (`MyFunction`, `Config`)
- **Interno**: camelCase (`myVariable`, `getData`)
- **Constantes**: UPPER_SNAKE_CASE (`MAX_CONNECTIONS`)

### Funciones

```go
// Función exportada (API)
func GetUserByID(id string) (*User, error) {
    // Implementation
}

// Función interna
func validateInput(data []byte) bool {
    // Implementation
}
```

### Manejo de Errores

```go
// Siempre retornar errores con contexto
return nil, fmt.Errorf("GetUserByID: failed to query db: %w", err)

// Verificar errores temprano
if err != nil {
    return nil, fmt.Errorf("GetUserByID: %w", err)
}
```

### Concurrencia

```go
// Goroutines con WaitGroup
func ProcessItems(items []Item) error {
    var wg sync.WaitGroup
    errChan := make(chan error, len(items))
    
    for _, item := range items {
        wg.Add(1)
        go func(i Item) {
            defer wg.Done()
            if err := process(i); err != nil {
                errChan <- err
            }
        }(item)
    }
    
    wg.Wait()
    close(errChan)
    
    for err := range errChan {
        return err
    }
    return nil
}

// Canales para comunicación
func worker(jobs <-chan Job, results chan<- Result) {
    for job := range jobs {
        results <- processJob(job)
    }
}
```

## Estructura de Proyecto

```
go/sandra/
├── core/
│   ├── core.go           # Entry point
│   ├── system/
│   │   └── version.go
│   ├── router/
│   │   └── routes.go
│   └── handlers/
│       └── api.go
├── config/
│   └── sandra.ini
├── go.mod
├── go.sum
└── compile.sh
```

## Comandos Útiles

```bash
# Formatear código
gofmt -w .

# Lint
golangci-lint run

# Tests
go test -v ./core/model -run TestNombreFuncion

# Build
go build -ldflags "-X core/system.Version=1.0.0" -o sandrad core/core.go

# Deps
go mod tidy
go mod download
```

## Configuración INI

```ini
[sandra]
version = 1.0.0
env = development

[server]
host = 0.0.0.0
port = 8080

[sentinel]
grpc_host = localhost
grpc_port = 50051
```

## Referencias

- Agente padre: `agents/SANDRA_FACTORY.md`
- Proyecto: `go/sandra/`
