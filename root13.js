function rot13(str) {
    const arrayStr = str.split("");
    let result = "";
    arrayStr.map(l => {
        let check = l.charCodeAt(0);
        if(65 <= check &&  check <= 90) {
            let positions = 0;
            const limitDown = 90;
            const startUp = 65;
            let count = l.charCodeAt(0);
            while (positions < 13) {
                if(count === limitDown){
                    count = startUp;
                }
                else{
                    count++;
                }
                positions++;
            }
            result += String.fromCharCode(count);
        } else {
            result += l;
        }
    })
    return result; 
}


console.log(root13("SERR CVMMN!"));
