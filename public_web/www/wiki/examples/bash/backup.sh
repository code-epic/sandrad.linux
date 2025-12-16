
#!/usr/bin/env bash
set -euo pipefail
SRC=${1:-/var/app/data}
DST=${2:-/backups}
STAMP=$(date +%F-%H%M%S)
mkdir -p "$DST"
tar -czf "$DST/backup-$STAMP.tar.gz" "$SRC"
echo "Backup en $DST/backup-$STAMP.tar.gz"
