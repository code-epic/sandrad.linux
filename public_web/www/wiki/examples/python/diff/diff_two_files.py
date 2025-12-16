
import sys, difflib
a = open(sys.argv[1], encoding='utf-8', errors='ignore').read().splitlines()
b = open(sys.argv[2], encoding='utf-8', errors='ignore').read().splitlines()
for line in difflib.unified_diff(a, b, fromfile=sys.argv[1], tofile=sys.argv[2], lineterm=''):
    print(line)
