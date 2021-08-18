
# DEFINITION
# def first__function():
#     pass

# result = first__function()
# print(result)

# LAMBDA
# lambda is like an arrow function
# nums = [1, 3, 2, 6, 5]
# odds = list( filter(lambda num: num % 2, nums) )
# syntax: lambda <parameter,[...]>: <operation>

# x = lambda a, b : a * b
# print(x(5, 6))

# VARIED NUMBER OF PARAMETERS

# args
# def f(*args):
#   print( type(args) )
#   for arg in args:
#     print(arg)

# f(1, 2, 'SEI')

# def add(num, *args):
#     sum = num
#     for num in args:
#         sum += num
#     return sum

# print(add(7,3, 4, 7))

# kwargs
def dev_skills(dev_name, **kwargs):
  dev = {'name': dev_name, 'skills': {}}
  # unpacking the tuples returned by the items function
  for skill, rating in kwargs.items():
    dev['skills'][skill] = rating
  return dev

print(dev_skills('Jackie', HTML=5, CSS=3, JavaScript=4, Python=2))


# REQUITES POSITIONAL ARGUMENT ORDER
# def arg_demo(pos1, pos2, *args, **kwargs):