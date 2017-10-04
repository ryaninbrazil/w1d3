// Write a function countLetters that can return to us all the unique characters that exist in a string that is passed into the function.

// Furthermore, the function should also report back how many instances of each letter were found in the string.

// Functions can only return one thing. That thing can (as we've seen) be a primitive data type, like a number, a boolean, null or a string.

// However, our function countLetters needs to return an object that can represent the stats for the sentence it is given: all the characters found in the input string, and their respective counts.






// function countLetters(word) {
//   for (var i = 0; i < countLetters.length; i++) {
//   }  
   
//   return countLetters = 'ABC'.charCodeAt(0);;
// }
// // console.log(countLetters("Hello"));
// console.log(countLetters("hello"));
// // countLetters("lighthouse in the house")

function countUniqueChars(strFld)    {
    counts = {};
    for (var ix = 0; ix < strFld.length; ix++)    {
        if (strFld[ix] != " ")    {
            if (counts[strFld[ix]] === undefined)    {
                counts[strFld[ix]] = 1;
            }    else    {
                counts[strFld[ix]]++;
            }
        }
    }
    return counts;
}
console.log(countUniqueChars("lighthouse in the house"));






