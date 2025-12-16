
# RDN: Regla Declarativa de Negocio
# Regla: dict con operadores lógicos y comparadores simples
def eval_rule(rule, ctx):
    op = rule.get('op')
    if op in ('and','or','not'):
        if op=='and': return all(eval_rule(r, ctx) for r in rule['rules'])
        if op=='or':  return any(eval_rule(r, ctx) for r in rule['rules'])
        if op=='not': return not eval_rule(rule['rule'], ctx)
    # comparación
    field, cmp, value = rule['field'], rule['cmp'], rule['value']
    v = ctx.get(field)
    if cmp=='eq': return v == value
    if cmp=='neq': return v != value
    if cmp=='gt': return v > value
    if cmp=='lt': return v < value
    if cmp=='in': return v in value
    if cmp=='contains': return isinstance(v, (list,str)) and value in v
    return False

if __name__ == '__main__':
    rule = {'op':'and','rules':[
        {'field':'monto','cmp':'gt','value':100},
        {'field':'cliente','cmp':'in','value':['A','B','C']}
    ]}
    print(eval_rule(rule, {'monto':150,'cliente':'B'}))
