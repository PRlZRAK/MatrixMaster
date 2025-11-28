#define a function that takes a string
#split the string into array of words
#create a string with 1st word of the array
#loop through the array
#compare the length of the current word with length of the string we have created
#if current word is bigger, replace the string with it 
#return the string after the loop

def longestWord(s):
    words = s.split()
    longest = words[0]
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest
print(longestWord("w1 w22 w55555 w333 w4444 "))