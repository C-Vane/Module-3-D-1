/* 1) MAX CHAR
Given a string, return the character that is most
commonly used in the string.
--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
const mostCommen = (str) => {
  let counter = 0;
  let max = 0;
  let char = 0;
  let char_max = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") i++;
    else {
      for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j]) {
          counter++;
          char = str[i];
          delete str[j];
        }
      }
      if (counter > max) {
        max = counter;
        char_max = char;
      }
    }
  }
  return char_max;
};

/* 2) ANAGRAMS
Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case
--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/
const anagram1 = (str1, str2) => {
  let count = 0;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] >= "a" && str1[i] <= "z") {
      for (let j = 0; j < str2.length; i++) {
        if (str1[i] === str2[j]) {
          count++;
        }
      }
      if (count != 1) return false;
    } else i++;
  }
  return true;
};

/* 3) ANAGRAMS 2
Given a word and a list of possible anagrams, select the correct sublist.
--- Examples
    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/
const anagram2 = (str, arr) => {
  let res = [];
  arr.forEach((element) => {
    if (anagram1(str1, element)) res.push(arr[i]);
  });
  return res;
};

/* 4) PALINDROME
Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.
--- Examples:
    palindrome("abba") === true
    palindrome("abcdefg") === false
 */
const palindrome = (str) => {
  let cont = 0;
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] === str[str.length - (i + 1)]) cont = 0;
    else {
      cont = 1;
      return false;
    }
  }
  if (cont === 0) return true;
};
/* 5) REVERSE INT
Given an integer, return an integer that is the reverse
ordering of numbers.
--- Examples
    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */
const reversInt = (str) => {
  let temp = 0;
  for (i = 0; i < str.length; i++) {
    if (typeof str[i] === "number") {
      temp = str[i];
      str[i] = str[str.length - (i + 1)];
      str[str.length - (i + 1)] = temp;
    }
  }
  return parseInt(str);
};

/* 6) STEPS
Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!
--- Examples
    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

/* 7) REVERSE STRING
Given a string, return a new string with the reversed
order of characters
--- Examples
    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */
const revers = (str) => {
  let temp = 0;
  for (i = 0; i < str.length; i++) {
    temp = str[i];
    str[i] = str[str.length - (i + 1)];
    str[str.length - (i + 1)] = temp;
  }
  return str;
};
/* 8) CHUNK
Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size
--- Examples
    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/
const chunk = (arr, num) => {
  let res = {};
  for (let i = 0; i < num; i++) {
    res[i] = arr.split(i * (arr.lenght / num), (i + 1) * (arr.lenght / num));
  }
  return res;
};
/* 9) PYRAMID
Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides
--- Examples
    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

/* 10) SPYRAL MATRIX
Write a function that accepts an integer N
and returns a NxN spiral matrix.
--- Examples
    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]
*/
const matrix = (N) => {
  let res = [];
  let y = 0;
  for (let i = 0; i < N / 2; i++) {
    for (let x = 0; x < N / 2 - i; x++) {
      res[x] = x + y + i + 1;
      /*  if (x === N - i - 1) {
        for (y = 0; y < N - i; y++) {
          // res[(x, y)] = (x + y) * i + i;
          if (y === N - i - 1) {
            i++;
            for (let x = N - i; x > 0; x--) {
              //res[(x, y)] = (x + y) * i + i;
              for (let y = N - i; y > 0; y--) {
                // res[(x, y)] = (x + y) * i + 1 * i;
              }
            }
          }
        }
      } */
    }
  }
  return res;
};
console.log(matrix(10));
