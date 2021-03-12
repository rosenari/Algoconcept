let v;
function solution(n, computers) {
    var answer = 0;
    v = new Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        if (v[i]) continue;

        BFS(i, computers);
        answer++;
    }

    return answer;
}

function BFS(num, computers) {
    let queue = [];
    queue.push(num);
    v[num] = true;

    while (queue.length > 0) {
        let num = queue.shift();

        for (let index in computers[num]) {
            if (!v[index] && computers[num][index] === 1) {
                queue.push(index);
                v[index] = true;
            }
        }
    }
}