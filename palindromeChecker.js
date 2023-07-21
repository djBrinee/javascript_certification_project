function palindrome(str) {
    const regex = /([A-Za-z\d])+/g
    let tranformedStr = str.match(regex)
    .join("")
    .toLowerCase();

    let reverseStr = tranformedStr.split("")
    .reverse()
    .join("");

    return reverseStr === tranformedStr
}

console.log(palindrome("A man, a plan, a canal. Panama"));


