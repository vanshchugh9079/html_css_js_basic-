import functools
add=lambda a,b,c:a+b+c
newadd=functools.partial(add,10,20)
print(newadd(50))
