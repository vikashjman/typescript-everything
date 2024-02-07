

def pattern(n):
    n += 1
    for i in range(1,n):
        print(i,end=" ")
    print()
    for i in range(1,n,2):
        print(i,end=" ")
    print()
    for i in range(2,n,2):
        print(i,end=" ")
    print()
    print('*')

n = int(input())
pattern(n)