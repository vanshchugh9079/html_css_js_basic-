def armstrong(num):
    sum=0
    newnum=num
    while(num>0):
        sum+=(num%10)**3
        num=num//10
    if(sum==newnum):
        return("this is armstrong")
    else:
        return("not a armstrong")

print(armstrong(153))
