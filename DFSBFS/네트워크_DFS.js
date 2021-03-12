let v;
function solution(n, computers) {
    let answer = 0;
    v = new Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        if (v[i]) continue;

        DFS(i, computers);
        answer++;
    }

    return answer;
}

function DFS(num, computers) {
    v[num] = true;

    for (let index in computers[num]) {
        if (computers[num][index] === 1 && !v[index]) DFS(index, computers);
    }
}