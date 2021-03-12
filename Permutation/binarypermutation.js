(function () {
    let arr = [1, 2, 3, 4, 5];
    const N = arr.length;
    const R = 3;
    let total = 0;

    binaryPermutation(0, 0, new Array(R));
    console.log("경우의 수:" + total);

    function binaryPermutation(cnt, flag, space) {
        if (cnt === R) {
            console.log(space);
            total++;
            return;
        }

        for (let i = 0; i < N; i++) {
            if ((flag & (1 << i)) !== 0) continue;

            space[cnt] = arr[i];
            binaryPermutation(cnt + 1, flag | (1 << i), space);
        }
    }
})();