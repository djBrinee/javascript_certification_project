function convertToRoman(num)
{
    const ROMANDICT = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    }
    let actualValue = num;
    let result = "";
    while (num > -1)
    {
        if (ROMANDICT[num] !== undefined)
        {
            result += ROMANDICT[num]
            num = actualValue - num;
            actualValue = num;
        } else
        {
            num--;
        }
    }

    return result;
}

console.log(convertToRoman(101));

