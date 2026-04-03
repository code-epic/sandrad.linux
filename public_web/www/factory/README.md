# SandraFactory - Landing Page

Este es el punto de entrada web para el sistema de gestión de fábrica de software SandraFactory.

## Estructura

```
factory/
├── index.html          # Página principal
├── agents/            # Documentación de agentes
│   ├── SANDRA_FACTORY.md
│   ├── ECOSYSTEM/     # Agentes del ecosistema
│   └── PRODUCTS/      # Agentes de productos
└── skills/            # Habilidades compartidas
```

## Desarrollo

Para actualizar este proyecto desde el orquestador:

```bash
cd $SANDRA_HOME/orquestador
./sync_factory.sh
```

## Acceso

Una vez que Sandra Server esté corriendo:

```
http://localhost/factory/
```

## Sincronización

El script `sync_factory.sh` en el orquestador mantiene sincronizados:
- Landing page (index.html)
- Documentación de agentes
- Skills compartidos

---
SandraFactory v1.0.0 - 28/03/2026
