function solution(n, costs) {
    let adjList = new Array(n);
    for (let i = 0; i < adjList.length; i++) {
        adjList[i] = [];
    }

    for (let i in costs) {
        let from = costs[i][0];
        let to = costs[i][1];
        let w = costs[i][2];
        adjList[from].push([to, w]);
        adjList[to].push([from, w]);
    }

    let answer = Prim(n, adjList);

    return answer;
}

function Prim(n, adjList) {
    let sum = 0;
    let cnt = 0;
    let pque = [];
    let v = new Array(n).fill(false);
    let minEdge = new Array(n).fill(987654321);
    minEdge[0] = 0;

    pque.push([0, minEdge[0]]);

    while (pque.length > 0) {
        let data = pque.shift();
        let vertex = data[0];
        let min = data[1];

        if (v[vertex]) continue;

        v[vertex] = true;
        sum += min;

        if (cnt++ === n) break;

        for (let value of adjList[vertex]) {
            let to = value[0];
            let w = value[1];
            if (!v[to] && minEdge[to] > w) {
                minEdge[to] = w;
                pque.push([to, minEdge[to]]);
                pque.sort((a, b) => a[1] - b[1])
            }
        }
    }

    return sum;
}