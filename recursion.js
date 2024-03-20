/** product: calculate the product of an array of numbers. */

function product(nums, index = 0) {
  if (index === nums.length) return 1;
  return nums[index] * product(nums, index + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0, longestSoFar = 0) {
  if (index === words.length) return longestSoFar;
  longestSoFar = Math.max(longestSoFar, words[index].length);
  return longest(words, index + 1, longestSoFar);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0, result = "") {
  if (index >= str.length) return result;
  result += str[index];
  return everyOther(str, index + 2, result);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, index = 0) {
  if (index >= str.length / 2) return true;
  if (str[index] !== str[str.length - 1 - index]) return false;
  return isPalindrome(str, index + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (index === arr.length) return -1;
  if (arr[index] === val) return index;
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, index = 0) {
  if (index === str.length) return "";
  return revString(str, index + 1) + str[index];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArray = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      stringArray.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      stringArray.push(...gatherStrings(obj[key]));
    }
  }
  return stringArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) return -1;
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === val) return mid;
  if (arr[mid] > val) return binarySearch(arr, val, left, mid - 1);
  return binarySearch(arr, val, mid + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
