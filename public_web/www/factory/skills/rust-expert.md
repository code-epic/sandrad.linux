# RUST-EXPERT SKILL

## Identificación

- **Nombre**: Rust-Expert
- **Tipo**: Skill Técnica
- **Versión**: 1.0.0
- **Fecha**: 28/03/2026
- **Ubicación**: `/Users/crash/dev/orquestador/skills/rust-expert.md`

## Descripción

Skill especializada en el lenguaje de programación Rust, utilizada por los proyectos Sandra Sentinel y Sandra Desktop Container.

## Convenciones de Código

### Naming

```rust
// Funciones: snake_case
fn calculate_pension(years: u32, salary: f64) -> f64 {
    // implementation
}

// Tipos: CamelCase
struct PensionConfig {
    years: u32,
    salary: f64,
}

// Constantes: SCREAMING_SNAKE_CASE
const MAX_RETRIES: u32 = 3;
```

### Manejo de Errores

```rust
// Usar Result<T, E>
fn calculate_pension(years: u32) -> Result<f64, PensionError> {
    if years < 15 {
        return Err(PensionError::InsufficientYears);
    }
    Ok(compute_pension(years))
}

// Propagar con ?
fn process() -> Result<(), Box<dyn Error>> {
    let pension = calculate_pension(years)?;
    save_result(pension)?;
    Ok(())
}
```

### Async con Tokio

```rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let (tx, mut rx) = mpsc::channel::<Task>(100);
    
    // Spawn workers
    for _ in 0..4 {
        let mut rx = rx.clone();
        tokio::spawn(async move {
            while let Some(task) = rx.recv().await {
                process_task(task).await;
            }
        });
    }
    
    Ok(())
}
```

### gRPC con Prost

```rust
use tonic::{transport::Server, Request, Response};
use crate::proto::sentinel::{
    sentinel_service_server::{SentinelService, SentinelServiceServer},
    CalculateRequest, CalculateResponse,
};

#[tonic::async_trait]
impl SentinelService for SentinelServiceImpl {
    async fn calculate(
        &self,
        request: Request<CalculateRequest>,
    ) -> Result<Response<CalculateResponse>, Status> {
        let req = request.into_inner();
        let result = self.engine.calculate(req)?;
        Ok(Response::new(CalculateResponse { result }))
    }
}
```

### Código Seguro

```rust
// Documentar bloques unsafe
unsafe {
    // Accessing raw pointer
    let ptr = data.as_ptr();
    // Always bounds check first!
}
```

## Estructura de Proyecto

```
rust/sandra.sentinel/
├── src/
│   ├── lib.rs
│   ├── core/
│   │   ├── domain/
│   │   │   ├── mod.rs
│   │   │   └── pension.rs
│   │   └── ports/
│   │       └── mod.rs
│   └── adapters/
│       ├── grpc.rs
│       └── storage.rs
├── proto/
│   └── sentinel.proto
├── Cargo.toml
└── README.md
```

## Comandos Útiles

```bash
# Build
cargo build
cargo build --release

# Tests
cargo test
cargo test nombre_test -- --exact

# Lint
cargo clippy

# Docs
cargo doc --open

# Benchmarks
cargo bench
```

## SQLite con rusqlite

```rust
use rusqlite::{Connection, Result};

fn init_db(path: &str) -> Result<Connection> {
    let conn = Connection::open(path)?;
    conn.execute(
        "CREATE TABLE IF NOT EXISTS pension (
            id INTEGER PRIMARY KEY,
            employee_id TEXT NOT NULL,
            amount REAL NOT NULL
        )",
        [],
    )?;
    Ok(conn)
}
```

## Referencias

- Agente padre: `agents/SANDRA_FACTORY.md`
- Proyectos: `rust/sandra.sentinel/`, `rust/sandra-desktop-container/`
