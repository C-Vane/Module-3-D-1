/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sumTriple = (a, b) => {
  if (a !== b) return a + b;
  else return (a + b) * 3;
};

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const check50 = (a, b) => {
  if (a + b === 50 || a === 50 || b === 50) return true;
  else return false;
};
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const removeChar = (str, position) => {
  return str.slice(0, position - 1) + str.slice(position);
};
/*
4)
 Create a function to find the largest of three given integers.
*/
const largestInt = (a, b, c) => {
  return Math.max(a, b, c);
};
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const checkRange = (a, b) => {
  if ((a, b) >= 40 && (a, b) <= 60) console.log("The Numbers range between 40 and 60");
  else if ((a, b) >= 70 && (a, b) <= 100) console.log("The Numbers range between 70 and 100");
  else console.log("The number are not in the ranges");
};
/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/
const copystr = (str, n) => {
  let res = "";
  if (n < 0) {
    console.log("Number of copies undifind");
  }
  for (let i = 0; i < n; i++) res = res.concat(str);
  return res;
};
/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const cityName = (arr) => {
  arr.forEach((element) => {
    element.startsWith("Los") || element.startsWith("New") ? console.log(element) : console.log("");
  });
};
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const sumArr = (arr) => {
  let res = 0;
  if (arr.length != 3) {
    console.log("Array doesn't have 3 elements");
    return;
  } else if (arr === "null") {
    console.log("Array Not defined");
    return;
  } else {
    arr.forEach((element) => {
      res += element;
    });
  }
  return res;
};
/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const containNum = (arr) => {
  if (arr.length != 2) {
    console.log("Array doesn't have 2 elements");
    return false;
  } else if (arr === "null") {
    console.log("Array Not defind");
    return false;
  } else if (arr.includes(3) || arr.includes(1)) return true;
  else return false;
};
/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
const NotContainNum = (arr) => {
  if (arr.length != 2) {
    console.log("Array doesn't have 2 elements");
    return false;
  } else if (arr === "null") {
    console.log("Array Not defind");
    return false;
  } else if (!arr.includes(3) || !arr.includes(1)) return true;
  else return false;
};
/*
11)
Create a function to find the longest string from a given array of strings.
*/
const longestString = (arr) => {
  let res = "";
  arr.forEach((element) => {
    if (element.length > res.length) res = element;
  });
  return res;
};
/*
12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
    */
const typeOfAngle = (angle) => {
  if (angle < 90) console.log("The angle is an Acute angle");
  else if (angle === 90) console.log("The angle is a Right angle");
  else if (angle > 90) console.log("The angle is an Obtuse angle");
  else if (angle === 180) console.log("The angle is a Straight angle");
  else console.log("The angle is larger then 180 or a negative angle");
};

/*
13)
Create a function to find the index of the greatest element of a given array of integers
*/
const largestIntIndex = (arr) => {
  let index = arr[0],
    num = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > num) {
      num = arr[i];
      index = i;
    }
  }
  return index;
};
/*
14)
Create a function to get the largest even number from an array of integers.
*/
const largestEvenIndex = (arr) => {
  let index,
    num = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num && arr[i] % 2 === 0) {
      num = arr[i];
      index = i;
    }
  }
  return index;
};
/*
15)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
//Ex 2
/*
16)
Create a function to check from two given integers, whether one is positive and another one is negative.
*/
const checkPosNeg = (a, b) => {
  if (a > 0 && b < 0) return true;
  else if (a < 0 && b > 0) return true;
  else return false;
};
/*
17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/
const newStringUpper = (str) => {
  let new_str = "";
  if (str.length <= 3) new_str = str.toUpperCase();
  else {
    new_str = str.slice(0, 3).toLowerCase();
    new_str += str.slice(3).toUpperCase();
  }
  return new_str;
};
/*
18)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/
const checkRange80 = (a, b) => {
  if (a + b >= 50 && a + b <= 80) return 65;
  else return 80;
};
/*
19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/
const factorString = (num) => {
  let found = 0;
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      switch (i) {
        case 3:
          console.log("Diego ");
          found++;
          break;

        case 5:
          console.log("Riccardo ");
          found++;
          break;
        case 7:
          console.log("Stefano ");
          found++;
          break;
        default:
          break;
      }
    }
  }
  if (found === 0) console.log("Number" + num);
};
/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/
const acronym = (str) => {
  let res = "";
  res = str[0].toUpperCase();
  for (i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      res += str[i].toUpperCase();
    }
  }
  return res;
};
//console.log(sumTriple(5, 4));
//console.log(check50(25, 21));
//console.log(removeChar("Hello Stivers", 7));
//console.log(largestInt(4, 2, 8));
//checkRange(45, 60);
//console.log(copystr("Strive", 5));
//cityName(["New York", "Chicago", "New Jersay"]);
//console.log(sumArr([5, 5, 7]));
//console.log(containNum([0, 4]));
//console.log(NotContainNum([1, 3]));
//console.log(longestString(["Hello", "strivers", "hey"]));
//typeOfAngle(60);
//console.log(largestIntIndex([5, 99, 6, 77]));
//console.log(largestEvenIndex([5, 99, 6, 77]));
//15=ex2
//console.log(checkPosNeg(-4, -6));
//console.log(newStringUpper("str"));
//console.log(checkRange80(80, 25));
//factorString(105);
//console.log(acronym("strive school rocks"));
