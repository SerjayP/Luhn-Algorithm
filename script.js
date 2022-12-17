function validCard(num) {
    let sum = 0;
    let numArray = Array.from(String(num), Number);
    for (let i = 0; i < numArray.length-1; i+=2) {
        if ((numArray[i] * 2) > 9){
            // converts numbers into arreay
            let newNum = Array.from(String(numArray[i] * 2), Number)
            newNum.forEach((n)=>{
                sum += n //adds numbers to sum
            })
        } else {
            sum += numArray[i] * 2
        }
    }
    for (let i = 1; i < numArray.length; i+=2) {
            sum += numArray[i]
        }
    console.log(sum)
    console.log(sum % 10 === 0)
}


validCard(1234567890123456); //should be false
validCard(4408041234567893); //should be true
validCard(38520000023237); //should be true
validCard(4222222222222); //should be true