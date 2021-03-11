//1~3000까지중 소수를 출력하세요.
(function (num) {
    let isNot = new Array(num + 1).fill(false);//소수라면 false

    for (let i = 2; i <= Math.sqrt(num); i++) {

        if (isNot[i]) continue;

        for (let j = i + i; j <= num; j += i) {
            isNot[j] = true;
        }
    }

    console.log("== 1~3000중 소수인 것들 출력 ==")
    for (let i = 2; i <= num; i++) {
        if (!isNot[i]) console.log(i);
    }
})(3000);


//7918은 소수인지 아닌지 출력하세요.
console.log("== 7918은 소수인가요 ? ==")
console.log(isPrime(7918));



function isPrime(num) {
    let isNot = new Array(num + 1).fill(false);//소수라면 false

    for (let i = 2; i <= Math.sqrt(num); i++) {

        if (isNot[i]) continue;

        for (let j = i; j <= num; j += i) {
            isNot[j] = true;
        }
    }

    //소수가 아니라면
    if (isNot[num]) return false;

    return true;
}