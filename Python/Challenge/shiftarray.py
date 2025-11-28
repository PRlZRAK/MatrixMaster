# create a function that takes an array
# insert the last number of the array to the beginning
# remove the last number
# Return the array

def shiftArray(arr):
    arr.insert(0, arr[-1])
    arr.pop()
    return arr
    
print(shiftArray([1, 2, 3, 4, 5]))
