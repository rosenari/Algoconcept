(function () {
    let arr = [1, 2, 3, 4, 5];
    const N = arr.length;
    const R = 3;
    let v = new Array(N).fill(false);
    let total = 0;

    Permutation(0, new Array(R));
    console.log("경우의수 : " + total);

    function Permutation(cnt, space) {
        if (cnt === R) {
            total++;
            console.log(space);
            return;
        }

        for (let i = 0; i < N; i++) {
            if (v[i]) continue;

            v[i] = true;
            space[cnt] = arr[i];
            Permutation(cnt + 1, space);
            v[i] = false;
        }
    }


})();