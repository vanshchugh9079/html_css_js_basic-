import functools
arr=[1,2,3,4,5]
# newarr=functools.reduce(lambda a,b : a+b,arr)
newarr=functools.reduce(lambda a,b : a if a>b else b,arr)
print(newarr)

