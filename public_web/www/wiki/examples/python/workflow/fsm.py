
# FSM mínima
class FSM:
    def __init__(self, initial, transitions):
        self.state = initial
        self.transitions = transitions
    def send(self, event):
        key = (self.state, event)
        if key in self.transitions:
            self.state = self.transitions[key]
        return self.state

if __name__ == '__main__':
    t = {('nuevo','aprobar'):'aprobado', ('nuevo','rechazar'):'rechazado'}
    f = FSM('nuevo', t)
    print(f.send('aprobar'))
