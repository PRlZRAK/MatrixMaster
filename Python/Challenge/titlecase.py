# define a function that takes a string
# create an empty string
# loop through array of words created by splitting the string
# capitalize the first letter in the word
# add the word to the empty string with a space
# return the new string

def titleCase(arr): 
    result = ""
    for word in arr.split():  
        upperCase = word.title()  
        result = result + upperCase + " "
    return result

print(titleCase("make first letters upper case")) 