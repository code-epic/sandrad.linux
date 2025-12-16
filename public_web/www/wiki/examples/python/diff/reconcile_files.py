
import sys
# Conciliación simple: intersección y diferencias entre 2 o 3 archivos (línea a línea)
sets = [set(open(p, encoding='utf-8', errors='ignore').read().splitlines()) for p in sys.argv[1:]]
common = set.intersection(*sets)
only = [s - common for s in sets]
print("# Comunes:"); print("\n".join(sorted(common)))
for i, o in enumerate(only, start=1):
    print(f"\n# Solo en archivo {i}:"); print("\n".join(sorted(o)))
