function palindrome(str) {
  let regex = /[a-z0-9]/gi;
  str = str.toLowerCase();
  str = str.match(regex);
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

palindrome("0_0 (: /-\ :) 0-0");