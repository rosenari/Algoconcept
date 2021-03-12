(function () {
    let arr = [1, 2, 3, 4, 5];
    const N = arr.length;
    let total = 0;

    powerSet(0, new Array(0));
    console.log("경우의수 : " + total);
    function powerSet(cnt, space) {
        if (cnt === N) {
            console.log(space);
            total++;
            return;
        }

        space.push(arr[cnt]);
        powerSet(cnt + 1, space);
        space.splice(space.length - 1, 1);
        powerSet(cnt + 1, space);
    }
})();