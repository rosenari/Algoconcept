(function () {
    let arr = [5, 4, 1, 2, 3];

    arr.sort((a, b) => a - b);

    do {
        console.log(arr);
    } while (nextPermutation(arr));


    function nextPermutation(numbers) {
        let i = numbers.length - 1;

        //꼭대기 찾기
        while (i > 0 && numbers[i - 1] >= numbers[i]) i--;

        if (i === 0) return false;

        let j = numbers.length - 1;

        //꼭대기 바로 앞 떨어지는 숫자보다 뒤에 오른막 부분배열에 큰값이 있을때까지
        while (numbers[i - 1] >= numbers[j]) j--;

        //뒤에 큰값이 있다면 교환
        swap(numbers, i - 1, j);

        let k = numbers.length - 1;

        //꼭대기부터 끝까지 전부 스왑
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