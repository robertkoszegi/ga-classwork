
# --Viewing obect details--
# # create a list
# nums = [1, 2, 3]
# # print the attributes & methods nums has
# print( dir(nums) )

# --Creating a class--
# __init__ is like the constructor method in JS
# instance method is inherited by the object when a class in instantiated
# 'self' is used when defining the class (self = this in JS)
# when instantiating self refers to the object that is being instantiated 
# class Dog():
#   def __init__(self, name, age = 0):
#     self.name = name
#     self.age = age

#   def bark(self):
#     print(f'{self.name} says woof!')

# spot = Dog('Spot', 8)
# print(spot)   # -> will show location in memory
# print(spot.name)
# print(spot.age)
# print(spot.bark())

# Examples
# dog = Dog('Lassie')
# print(dog.name, dog.age)

# fido = Dog('Fido', 8)
# print(fido.bark())

# View details
# print(dir(Dog))



# -- Overriding Methods --

# modifying the __str__ method to modify the output the object (or part of) is printed
# class Dog():
#   def __init__(self, name, age = 0):
#     self.name = name
#     self.age = age

#   def bark(self):
#     print(f'{self.name} says woof!')
    
#   def __str__(self):
#     return f'Dog named {self.name} is {self.age} years old'

# spot = Dog('Spot', 8)

# print(spot) 



# -- EXERCISE --
# class Vehicle():
#     def __init__(self, vin, make, model, running = False):
#         self.vin = vin
#         self.make = make
#         self.model = model
#         self.running = running
    
#     def start(self):
#         self.running = True
    
#     def stop(self):
#         self.stop = False

#     def __str__(self):
#         return f'Vehicle ({self.vin}) is a {self.make} model {self.model}.'


# car = Vehicle('TS123', 'Tesla', 'Model S')
# print(car.running) # -> False
# car.start()
# print(car.running) # -> True
# plane = Vehicle('X99Y', 'Boeing', '747-B')
# print(plane.vin, plane.make, plane.model)
# print(plane)
# print(car)



# -- CLASS VS INSTANCE MEMBERS --
# The next_id belongs to the class, not any instantiated object 
# The decorator is required to provide the class as parameter in defining the method

class Dog():
    # class attribute
    next_id = 1

    # updated __init__
    def __init__(self, name, age = 0):
        self.name = name
        self.age = age
        self.id = Dog.next_id
        Dog.next_id += 1

    def bark(self):
        print(f'{self.name} says woof!')

    # updated __str__
    def __str__(self):
        return f'Dog ({self.id}) named {self.name} is {self.age} years old'

    @classmethod #<- decorator
    def get_total_dogs(cls):
        # cls represents the Dog class
        return cls.next_id - 1


# spot = Dog('Spot', 8)
# print(spot)
# pup = Dog('Lassie')
# print(pup)

# # class methods are called on the class, not an instance
# print(Dog.get_total_dogs())



# -- INHERITANCE --
# -requires the Dog class definition uncommented above-
# Pass in superclass as argument
class ShowDog(Dog):
  # Add additional parameters AFTER those in the superclass
  def __init__(self, name, age = 0, total_earnings = 0):
    # Always call the superclass's __init__ first
    Dog.__init__(self, name, age)
    # Now add any new attributes
    self.total_earnings = total_earnings
  
  # Add additional methods
  def add_prize_money(self, amount):
    self.total_earnings += amount

winky = ShowDog('Winky', 3, 1000)
print(winky) # Yay, inherited the overriden __str__
winky.bark() # Yay, inherited the bark method
print(winky.total_earnings) # -> 1000
winky.add_prize_money(500) # New method that 'Dogs' don't have
print(winky.total_earnings) # -> 1500