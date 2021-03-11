(function () {
    let arr = [7, 6, 1, 3, 5, 4, 2];
    const N = arr.length;

    quickSort(arr, 0, N - 1);

    console.log(arr);

    function quickSort(list, left, right) {
        if (left >= right) return;

        let p = partition(list, left, right);

        quickSort(list, left, p - 1);
        quickSort(list, p + 1, right);
    }

    function partition(list, left, right) {
        let p;
        let low, high;

        low = left;
        high = right + 1;
        p = list[left];

        do {
            do {
                low++;
            } while (low <= right && list[low] < p);


            do {
                high--;
            } while (high >= left && list[high] > p);

            if (low < high) {
                let temp = list[low];
                list[low] = list[high];
                list[high] = temp;
            }

        } while (low < high);

        let temp = list[left];
        list[left] = list[high];
        list[high] = temp;

        return high;
    }
})();