
# # value of the variable becomes the key in the dictionary
# someKey = 3

# d = {
#   someKey: 'three'
# }


# # print(d[3])

# # setting default if value in dict. is not found
# print(d.get(5, 'five'))

# ####  Dictionaries
# student = {
#   'name': 'Maria',
#   'course': 'SEI',
#   'current_week': 7
# } 

# 1
# skills = student['skills']
# print( student.get('skills') )

# Provide a default value if key not in dictionary
# print( student.get('skills', {'HTML': 5, 'JAVASCRIPT': 4}) )


# 2
# if 'course' in student:
#   print( f"{student['name']} is enrolled in {student['course']}")
# else:
#   print( f"{student['name']} is not enrolled in a course")

# 3
# student['course'] = 'math'
# student['mark'] = 100
# student['age'] = 21
# print(student)
# del student['age']
# print(student)
# # print(len(student))
# print(student.items())
# for key, val in student.items():
#   print( f"{key} = {val}" )

# 4
# where_my_things_are = {
#     'computer': 'on desk',
#     'phone' : 'under monitor',
#     'fan' : 'next to me',
#     'printer' : 'too far'
# }

# for key, val in where_my_things_are.items():
#     print(f"My {key} is {val}")

# 5
# ##### LISTS
colors = ['red', 'green', 'blue']
# print(len(colors))
# print(colors[-1])

# colors[-1] = 'brown'
# print(colors)

# colors.append('purple')
# print(colors)

# colors.extend(['orange', 'black'])
# print(colors)

# odds = [1, 3, 5]
# evens = [2, 4, 6]
# nums = odds + evens
# print(nums)

# colors.insert(1, 'yellow')
# print(colors)

# # pop by default removes the last item unless an index if specified
# # green = colors.pop(2)
# green = colors.pop()
# print(colors)
# print(green)

# # del doesn't return the delete item
# del colors[1]
# print(colors)

# # remove() removes the first matching item
# colors.remove('purple')
# print(colors)

# colors.clear()
# print(colors)


# for color in colors:
#     print(color)

# to access index while iterating
# for idx, color in enumerate(colors):
    # print(idx, color)


# 6
# # LIST COMPREHENSION
# # (a shortened for loo syntax)
# List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list.
# a_list = [ food for food in foods if "a" in food ] 
# new_List = [<to return with each item> for <argument> in <listname> <opt.filtering statement>]



# nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# squares = []
# # -standard:
# # for n in nums:
# #   squares.append(n * n)
# # -short:
# squares = [n * n for n in nums]
# print(squares)

# # plus_one = [n + 1 for n in nums]
# # print(plus_one)

# # FILTERING
# # I want 'n * n' for each 'n' in nums  if 'n * n' is even
# # -standard
# even_squares = []
# for n in nums:
#   square = n * n 
#   if square % 2 == 0:
#     even_squares.append(square)
# print(even_squares)

# # -short
# even_squares = [n * n for n in nums if (n * n) % 2 == 0]
# print(even_squares)

# 7
# TUPLES

colors = ('red', 'green', 'blue')
for idx, color in enumerate(colors):
  print(idx, color)

# unpacking
colors = ('red', 'green', 'blue')
r, g, b = colors
print(r, g, b)

# 8
# slicing
# syntax: a_sequence[m:n] -> [sart:end]
short_name = 'Alexandria'[0:4]
print(short_name)
