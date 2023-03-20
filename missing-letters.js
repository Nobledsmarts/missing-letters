function fearNotLetter(str) {
  let lastChar = str.slice(-1);
  let chars = [];
  let strArr = [... str.split("")];
  for(let i = str[0].charCodeAt(); i <= lastChar. charCodeAt(); i++){
    chars.push(String.fromCodePoint(i));
  }
  let difference = chars.filter(char => !strArr.includes(char)).join("");
  return difference ? difference : undefined;
}

console.log(fearNotLetter("abce"));
