(function () {
    let arr = [1, 2, 3, 4, 5];
    let N = arr.length;
    let R = 3;
    let total = 0;

    Combination(0, 0, new Array(R));

    console.log("경우의 수 : " + total);

    function Combination(cnt, start, space) {
        if (cnt === R) {
            console.log(space);
            total++;
            return;
        }

        for (let i = start; i < N; i++) {
            space[cnt] = arr[i];
            Combination(cnt + 1, i + 1, space);
        }
    }
})();