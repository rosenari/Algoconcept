let p;
function solution(n, costs) {
    let sum = 0;
    let num = 0;
    p = new Array(n).fill(0);
    costs.sort((a, b) => a[2] - b[2]);

    for (let i = 0; i < n; i++) {
        p[i] = i;
    }

    for (let i = 0; i < costs.length; i++) {
        let v1 = costs[i][0];
        let v2 = costs[i][1];
        let w = costs[i][2];

        if (union(v1, v2)) {
            num++;
            sum += w;
        }

        if (num === n - 1) break;
    }

    return sum;

}

function find(x) {
    if (p[x] === x) return x;

    return p[x] = find(p[x]);
}

function union(x, y) {
    let px = find(x);
    let py = find(y);

    if (px === py) return false;

    p[px] = py;

    return true;
}