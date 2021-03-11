(function () {
    let arr = [7, 3, 5, 1, 2];
    const N = arr.length;

    for (let i = 1; i < N; i++) {
        let key = arr[i];

        let j = i - 1;
        for (; j >= 0 && key < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = key;
    }

    console.log(arr);

})();