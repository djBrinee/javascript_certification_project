function telephoneCheck(str) {
    const regex = /^1?[-\s]?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/g;
    return regex.test(str);    
}

console.log(telephoneCheck("1 456 789 4444"));