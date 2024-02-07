user=input("enter a string:-")
def length(parm):
    count=0
    for i in parm:
     count+=1
    return count
print(length(user))
print(user[:4],"-",user[0:])
