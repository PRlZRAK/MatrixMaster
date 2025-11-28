#define a function that takes an array of numbers
#create an empty array 
#loop through the array of numbers
#check if the number is positive
#if it is, add it to the empty array
#return the new array after the loop

def removeNegative(arr):
     result = [] 
     for num in arr: 
         if num >=0: 
              result.append(num) 
     return result
print(removeNegative([-20,-32,-4444,35354,6,0,-756,-86685687]))