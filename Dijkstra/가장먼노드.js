function solution(n, edge) {
    let adjList = new Array(n + 1);
    for (let i = 0; i < adjList.length; i++) {
        adjList[i] = [];
    }

    for (let e of edge) {
        let from = e[0];
        let to = e[1];
        adjList[from].push([to, 1]);
        adjList[to].push([from, 1]);
    }

    let answer = Dijkstra(n, adjList);

    return answer;
}

function Dijkstra(n, adjList) {
    let v = new Array(n + 1).fill(false);
    let d = new Array(n + 1).fill(987654321);
    let cnt = 0;
    let pque = [];
    d[1] = 0;

    pque.push([1, d[1]]);

    while (pque.length > 0) {
        let data = pque.shift();
        let vertex = data[0];
        let min = data[1];

        if (v[vertex]) continue;

        v[vertex] = true;
        if (cnt++ === n) break;

        for (let data of adjList[vertex]) {
            let vertex2 = data[0];
            let w = data[1];
            if (!v[vertex2] && d[vertex2] > w + d[vertex]) {
                d[vertex2] = w + d[vertex];
                pque.push([vertex2, d[vertex2]]);
                pque.sort((a, b) => a[1] - b[1])
            }
        }

    }
    let max = 0;
    for (let i = 1; i < d.length; i++) {
        max = Math.max(max, d[i]);
    }
    let answer = 0;
    for (let i = 1; i < d.length; i++) {
        if (max === d[i]) answer++;
    }
    return answer;
}