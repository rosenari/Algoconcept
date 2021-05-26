(function () {
    let arr = [7, 8, 5, 4, 6, 2, 3, 1, 1, 1, 2, 2];
    const N = arr.length;
    const MAX = Math.max(...arr);

    let count = new Array(MAX + 1).fill(0);
    let result = new Array(N);

    for (let i = 0; i < N; i++) {
        count[arr[i]] += 1;
    }

    //누적합 구하기
    for (let i = 0; i < MAX; i++) {
        count[i + 1] += count[i];
    }

    //누적합을 바탕으로 숫자를 결과에 넣어준다.
    let k = 0;
    for (let i = 0; i < MAX + 1; i++) {
        for (let j = k; j < count[i]; j++) {
            result[j] = i;
        }
        k = count[i];
    }

    console.log(result);
})();
