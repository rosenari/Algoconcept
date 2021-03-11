(function () {
    let arr = [8, 5, 4, 2, 7, 6, 1, 3];
    let sorted = new Array(arr.length).fill(0);
    const N = arr.length;

    console.log(arr);
    mergeSort(arr, 0, N - 1);

    console.log(arr);

    function mergeSort(list, left, right) {
        if (left < right) {
            let mid = Math.floor((left + right) / 2);
            mergeSort(list, left, mid);
            mergeSort(list, mid + 1, right);
            merge(list, left, mid, right);
        }
    }

    function merge(list, left, mid, right) {
        let i = left; //list
        let j = mid + 1; //list
        let k = left; //sorted

        while (i <= mid && j <= right) {
            if (list[i] <= list[j]) {
                sorted[k++] = list[i++];
            } else {
                sorted[k++] = list[j++];
            }
        }
        //남아있는 것들 처리
        if (i > mid) { //오른쪽 것들이 처리가 안됐다면
            for (let l = j; l <= right; l++) {
                sorted[k++] = list[l];
            }
        } else { //왼쪽것들이 처리가 안됐다면
            for (let l = i; l <= mid; l++) {
                sorted[k++] = list[l];
            }
        }

        //sorted 임시배열 값들을 list로 복사
        for (let l = left; l <= right; l++) {
            list[l] = sorted[l];
        }
    }
})();