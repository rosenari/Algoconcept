(function () {
    let arr = [1, 2, 3, 4, 5];
    const N = arr.length;
    let total = 0;

    binaryPowerSet();

    console.log("경우의수 : " + total);

    function binaryPowerSet() {
        for (let flag = 0; flag < (1 << N); flag++) {
            let result = [];
            for (let i = 0; i < N; i++) {
                if ((flag & (1 << i)) != 0) result.push(arr[i]);
            }
            console.log(result);
            total++;
        }
    }
})();