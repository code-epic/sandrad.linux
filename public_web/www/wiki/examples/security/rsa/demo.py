
# Demostración RSA con pycryptodome (no incluido aquí por simplicidad)
# pip install pycryptodome
from Crypto.PublicKey import RSA
key = RSA.generate(2048)
print(key.export_key().decode())
