name=input("enter a word:  ")
vol=0
cons=0
for i in name:
    if(i=="a" or i=="e" or i=="i" or i=="o" or i=="u"):
        vol+=1
    else:
        cons+=1
print("vowel=",vol)
print("consulents",cons)
