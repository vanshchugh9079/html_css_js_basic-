def squre(sequence):
  for x in sequence:
       yield x * x
arr=[1,2,3,4,5]
squredvalue=squre(arr)
for value in arr:
    print(value)

