function checkCashRegister(price, cash, cid) {


    const EQUIVALENCE = {
        "PENNY":	0.01,
        "NICKEL":	0.05, 
        "DIME":	    0.1,
        "QUARTER":	0.25,
        "ONE":	1,
        "FIVE":	    5,
        "TEN":	    10,
        "TWENTY":	20,
        "ONE HUNDRED": 100
    }

    const STATES = ["INSUFFICIENT_FUNDS", "CLOSED", "OPEN"];


    let dif = cash - price;

    const result = {status: "",
    change: []};
    
    for (let i = cid.length - 1; i >= 0; i-- ){
        if(dif / EQUIVALENCE[cid[i][0]] >= 1) {
            if(cid[i][1] >= dif) {
                let temp = Math.floor(dif/EQUIVALENCE[cid[i][0]]) * EQUIVALENCE[cid[i][0]];
                cid[i][1] -= temp
                dif = parseFloat((dif - temp).toFixed(2))
                result.change.push([cid[i][0], temp]);
            } else if (cid[i][1] > 0 && cid[i][1] > EQUIVALENCE[cid[i][0]] ) {
                dif = parseFloat((dif - cid[i][1]).toFixed(2));
                result.change.push([cid[i][0], cid[i][1]]);
                cid[i][1] = 0;
            }
        }
    }
    let openStatus = false;
    for (const x of cid) {
        if(x[1] !== 0) {
            openStatus = true;
            break;
        }
    }
    if(dif > 0) {
        result.status = STATES[0];
        return result;
    } else if(openStatus){
        result.status = STATES[2];
        return result;
    } else {
        for(let i = 0; i < cid.length; i++) {
            if(result.change[i] === undefined) {
                break;
            }
            if(cid[i][0] === result.change[i][0]) {
                cid[i] = result.change[i];
            }
        }
        result.status = STATES[1];
        result.change =  cid;
        return result;
    }
  }

  // * Testing the project
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))