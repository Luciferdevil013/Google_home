import os 

l = []
for i in os.listdir():
    l.append('./Images/' + i)

for i in sorted(l):
    print(i)