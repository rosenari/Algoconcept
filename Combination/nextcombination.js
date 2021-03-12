(function () {
    let arr = [1, 2, 3, 4, 5];
    const N = arr.length;
    const R = 3;
    let total = 0;

    let temp = new Array(N).fill(0);
    for (let i = 0; i < R; i++) {
        temp[i] = 1;
    }
    temp.sort((a, b) => a - b);

    do {
        let result = [];
        for (let i = 0; i < N; i++) {
            if (temp[i]) {
                result.push(arr[i]);
            }
        }
        console.log(result);
        total++;
    } while (nextCombination(temp));
    console.log("경우의수 :" + total);

    function nextCombination(numbers) {
        let i = numbers.length - 1;
        while (i > 0 && numbers[i - 1] >= numbers[i]) i--;
        if (i === 0) return false;

        let j = numbers.length - 1;
        while (numbers[i - 1] >= numbers[j]) j--;

        swap(numbers, i - 1, j);

        let k = numbers.length - 1;
        while (i < k) {
            swap(numbers, i++, k--);
        }

        return true;
    }

    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
})();