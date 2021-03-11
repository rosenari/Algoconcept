(function () {
    let arr = [7, 5, 1, 3, 2];
    const N = arr.length;
    for (let i = 0; i < N - 1; i++) {
        let least = i;
        for (let j = i + 1; j < N; j++) {
            if (arr[least] > arr[j]) {
                least = j;
            }
        }

        if (least !== i) {
            let temp = arr[i];
            arr[i] = arr[least];
            arr[least] = temp;
        }
    }

    console.log(arr);
})();