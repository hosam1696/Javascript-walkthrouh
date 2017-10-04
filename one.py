x= 'Hosam'

for c in x:
    print(c)



class X:
    
    def __init__(self):
        print('from init function')
    name = 'X Class Name'
    def log(self):
        print('class name property:', self.name)

c = X()


c.log()