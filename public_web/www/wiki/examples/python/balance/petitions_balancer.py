
# Balance rudimentario round-robin
from itertools import cycle
targets = ['http://srv1','http://srv2','http://srv3']
rr = cycle(targets)
def next_target():
    return next(rr)
for _ in range(10):
    print(next_target())
