#define a function that takes an array of arrays of numbers
#create an empty array
#loop through the array of arrays
#append the largest number from each array to the empty array

def largestNumbers(arr):
    result = []  
    for a in arr:  
        result.append(max(a))  
    return result

print(largestNumbers([[13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1],[-1000,-1,-20,-5]]))