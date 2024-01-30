/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length <= 1) return true;

  const strList = str
    .toLowerCase()
    .replace(/[^a-z]+/gi, '')
    .split('');

  let [start, end] = [0, strList.length - 1];

  while (start < end) {
    // console.log(
    //   `${strList[start]} - ${strList[end]}  -> ${
    //     strList[start] !== strList[end]
    //   }`
    // );
    if (strList[start] !== strList[end]) return false;

    start += 1;
    end -= 1;
  }

  return true;
}

module.exports = isPalindrome;
