#### 자료구조

##### 선형과 비선형

- 선형 자료구조 : 자료를 구성하는 데이터를 순차적으로 나열시킨 형태
- 비선형 자료구조 : 하나의 자료 뒤에 여러개의 자료가 존재할 수 있는 형태

##### 배열

- 논리적 저장순서와 물리적 저장순서가 일치한다.
- 인덱스로 원소에 접근가능하며 해당원소에 접근하는 시간복잡도는 O(1)이다.
- 삽입,삭제의 경우 새로운배열을 만들어 인덱스를 이동시켜야 하므로 최악의 경우 O(n)의 시간복잡도를 갖는다.

##### 링크드리스트

- 배열에서 삽입,삭제 시간복잡도에 대한 문제점을 해결하기 위해 나온 자료구조이다.
- 각 원소들은 자기 다음에 어떤 원소인지만 기억하는 자료구조다.
- 따라서 삽입 삭제시 인덱스 이동이 없고, 이전 요소와 다음 요소만 변경하면 되기때문에 시간복잡도는 O(1)이된다.
- 하지만 삽입,삭제 하고자할때 해당 위치를 탐색하는 과정에서 첫번째 원소부터 다 확인해봐야해서 O(n)이 걸리고, 결국 삽입,삭제도 O(n)의 시간이 걸리게 된다.

##### 맵

- 탐색가능한 엔트리(키와 값으로 이루어진 쌍)들로 구성된 자료구조이다.
- 키를 통해 탐색,삽입,삭제가 가능하다.
- 각각의 키는 유니크(유일)하다.
- 키가 저장공간을 결정한다.
- 해시맵의 경우 입력,삭제,탐색에 대한 시간복잡도가 O(1)이다.

##### 셋

- 데이터 중복을 허용하지 않는 자료구조이다.
- 키만을 저장하는 점에서 맵과 차이점이 있다(자바스크립트 문서에는 값만을 저장한다고 표현).
- 해시셋 역시 맵과 동일하게 입력,삭제,탐색에 대한 시간복잡도가 O(1)이다.

##### 스택,큐

###### 스택
- 선형 자료구조의 일종으로 Last In First Out(LIFO)의 특징을 가지고 있다.
- 삽입,삭제의 경우 O(1)의 시간복잡도를 갖고, 탐색의 경우 O(n)의 시간복잡도를 갖는다.

###### 큐
- 선형 자료구조의 일종으로 First In First Out(FIFO)의 특징을 가지고 있다.
- 삽입,삭제의 경우 O(1)의 시간복잡도를 갖고, 탐색의 경우 O(n)의 시간복잡도를 갖는다.

##### 트리
- 비선형이며, 계층적 관계를 표현하는 자료구이다.

> 트리의 구성요소들

> Node(노드) : 트리를 구성하는 각각의 요소

> Edge(간선) : 트리를 구성하기 위한 노드와 노드의 연결선

> Root Node(루트 노드) : 트리 구조에서 최상위에 위치한 노드

> Leaf Node(단말 노드) : 하위에 다른 노드가 없는 노드

> Internal Node(내부 노드) : 단말노드를 제외한 모든 노드(루트도 포함)

> 트리 종류들

> 완전 이진 트리 : 왼쪽자식노드부터 채워지며, 마지막 레벨을 제외하고 모든 자식노드가 채워져 있는트리다.

> 포화 이진 트리 : 모든 노드가 0개 또는 2개의 자식노드를 가지며, 모든 리프노드가 똑같은 레벨에 있는 경우의 트리다.

> 정 이진 트리 : 모든 노드가 0개 또는 2개의 자식노드를 가지를 트리다.

> 편향 이진 트리 : 전부 한방향으로 편향된 트리다.

##### 이진 힙

- Tree형식을 하고 있으며, 트리 중에서도 배열에 기반한 완전 이진 트리이다.
- 배열로 구현할때 1번 인덱스부터 채워진다.
- 힙에는 최대힙,최소힙 두종류가 있다. 최대힙은 각 노드의 값이 자식 노드의 값보다 크거나 같다.(최대힙은 루트가 최대값), 최소힙은 반대이다.
- 최대힙의 경우 최대값 탐색의 시간복잡도는 O(1)이다.(최소힙도 최소값찾는데 O(1))
- 새로운 노드가 끝에 추가되거나, 루트노드가 삭제되는 경우 heap을 재구성하는 heapify 거친다. 해당 과정의 시간복잡도는 O(logn)이다.

##### 해시테이블

- 해시는 내부적으로 배열 사용하기떄문에 특정값 탐색시 그 데이터 고유의 인덱스로 접근하므로 평균 시간복잡도가 O(1)이다.(해시충돌이 일어날 경우 O(1)이 아닐수 있음)
- 특별한 알고리즘(해시함수)을 이용해 저장할 데이터를 기반으로 고유한 숫자를 만들어내고, 이를 인덱스로 활용한다.

> 해시함수

> 고유한 숫자 값(해시코드)을 만들어 내는 함수이다.

> 해시 함수는 해시충돌(동일 해시코드가 나오는 경우)이 최소화 되어야 한다.

> 해시 충돌이 많아 질수록 시간복잡도는 O(1)에서 O(n)에 가까워 진다.

> 해결충돌 해결방법

> 해싱된 인덱스에 이미 다른 값이 있다면 해당 데이터를 저장할 다른 위치를 찾은 뒤 저장해야한다. 방법은 크게 2가지가 있다.

> 1. 개방주소법

> 해시 충돌 발생시 다른 해시버컷에 해당 자료를 삽입하는 방식이다.

> 데이터를 저장할 장소를 다시 찾는 것을 말한다.

> 찾는 방법도 여러가지다. 순차적으로 찾는방법,특정함수를 통해 찾는방법,하나의 해시함수에서 충돌발생시 2차해시함수는 사용하는 방법.

> 2. 분리연결법

> 해시충돌이 발생할 경우 버킷들을 링크드 리스트 또는 트리로 구성하여 저장하는 방법이다.

> 일반적으로 개방주소법은 분리연결법보다 느리다.

> 트리로 구성할 경우 메모리 낭비가 심해 데이터가 적다면 보통 리스트로 구성한다.

> 개방주소법에 비해 테이블 확장을 늦출수있다.

##### 그래프

- 정점과 간선의 집합으로 이루어진 자료구조이다.
- 트리 또한 그래프이다. 허나 트리는 사이클이 허용되지 않는 그래프다.
- 방향 그래프와 무방향 그래프가 있다.
- 가중치 그래프와 비가중치 그래프가 있다.
- 부분 그래프란 본래 그래프에서 일부 정점 및 간선으로 이루어진 그래프이다.

> Degree : 무방향 그래프에서 각 정점에 연결된 간선의 개수

> 그래프 구현 방법

> 인접행렬 : NxN 2차원 배열을 사용하여 구현한다.

> 인접리스트 : 연결리스트를 사용한다.

> 간선리스트 : 배열을 이용해 간선을 모두 저장하고 있다.

> 인접행렬은 인접리스트에 비해 공간복잡도가 높다.(메모리사용 높음)

#### 알고리즘

##### 소수 구하기

- 에라토스테네스의 체
  
> 에라토스테네스의 체의 시간복잡도는 O(NloglogN)입니다.

> 제곱근 범위 나누기 법
> - 예를 들어 18의 약수는 1, 2, 3, 6, 9, 18이며, 18은 1 * 18, 2 * 9, 3 * 6   < √18 >   6 * 3, 9 * 2, 18 * 1입니다.
> - √18  * √18도 18인데, 이 √18을 기준으로 좌우로 곱하기가 대칭이므로 sqrt()값보다 같거나 작은 숫자로 나누어지면 그 이후에 대해서는 대칭이므로 계산을 할 필요가 없다는 원리입니다.

##### 정렬

- 안정정렬과 불안정정렬

> 동일한 값을 가진 키의 순서가 정렬후에도 유지되면 안정정렬

> 유지되지 않는다면 불안정정렬이다.

- 버블정렬

![image](https://user-images.githubusercontent.com/49670068/110732447-87694e80-8267-11eb-9082-66757e7fa39b.png)


> 서로 인접한 두 원소를 비교하여 크기가 순서되로 되어있지 않다면 서로 교환하여 정렬하는 알고리즘

> 시간복잡도는 O(N^2)이다.

> 구현은 단순하지만 비효율적인 알고리즘

> 안정 정렬

- 선택정렬

![image](https://user-images.githubusercontent.com/49670068/110736076-5b050080-826e-11eb-8256-a6e4898cfca2.png)

> 해당 순서에 원소를 넣을 위치는 이미 정해져 있고, 어떤 원소를 넣을지 선택하는 알고리즘 (오름차순일때는 최소값, 내림차순일때는 최대값)

> 시간복잡도는 O(N^2)이다.

> 구현은 단순하지만 비효율적인 알고리즘

> 불안정 정렬

- 삽입정렬

![image](https://user-images.githubusercontent.com/49670068/110742478-c86a5e80-8279-11eb-926e-4364b68f1da9.png)


> 삽입 정렬은 두번쨰 자료부터 시작해서 차례대로 왼쪽의 이미 정렬된 배열부분과 비교해 자신의 위치를 찾은후 자료들을 뒤로 옮기고 해당 위치에 자료를 삽입하여 정렬한다.

> 이미 정렬된 경우 매우 효율적이다. 

> BestT(n) = O(n) WorstT(n) = O(n^2)

> 안정 정렬

- 퀵정렬

![image](https://user-images.githubusercontent.com/49670068/110768957-075cdc00-829b-11eb-86bf-539fed446e8a.png)


> `리스트안에서 한요소(피벗)를 선택`하여 `피벗을 기준으로 왼쪽에는 피벗보다 작은요소,오른쪽은 피벗보다 큰요소`로 옮긴다. 그리고 `나눠진 부분배열을 순환 호출`을 통해 동일한 방법을 반복한다. `부분배열이 0이나 1이될때까지 반복`한다.

> 불안정 정렬에 속한다.

> 모든 정렬중 평균적으로 가장 빠르며, O(NlogN)의 시간복잡도를 갖는다.

> 분할시 비균등하게 분할한다.

- 힙정렬

> 힙 자료구조를 사용하여 정렬하는 방법이다.

> 오름차순으로 정렬하고 싶다면 최소 힙을 구성하여 루트노드 값을 계속 꺼내서 만들면된다.

> 내림차순으로 정렬하고 싶다면 최대힙을 구성하여 동일하게 진행

> 시간복잡도는 O(NlogN)이다. (자료의 개수(n) * 삭제시 재정비시간(logn))

> 전체 정렬된 값이 아닌 가장 큰값 몇개만 필요할떄 매우 유용하다.

> 불안정 정렬에 속한다.

- 병합정렬

![image](https://user-images.githubusercontent.com/49670068/110776514-7d654100-82a3-11eb-9e7f-5d12e2d0e5d8.png)

![image](https://user-images.githubusercontent.com/49670068/110776573-8fdf7a80-82a3-11eb-8c3b-8bb331febeaf.png)


> 하나의 배열을 `두개의 균등한 크기로 분할`하고 부분배열의 크기가 충분히 작지 않다면 `순환호출을 이용해 분할을 지속`한다. `정렬된 부분배열을 정렬된 상태로 합병`한다.

> 안정정렬에 속한다.

> 분할정복 알고리즘 중 하나이다.

> 시간복잡도는 O(NlogN)이다. (순환호출 깊이만큼 합병단계 logN * 각 합병시 이동연산 N)

> `갓 폰 노이만`이 만든 알고리즘

- 카운팅정렬

> 원소끼리 비교하지 않고 원소가 몇번 등장하는지 갯수를 세서 정렬하는 방식이다.

> 비교정렬이 아니며, 안정정렬에 속한다.

> O(N)의 시간복잡도를 갖는다. (퀵소트보다 빠름)

> 최대값의 크기만큼 메모리가 커지므로 O(n+k)의 공간복잡도를 갖는다.(k:숫자저장공간-최대값크기만큼,n:결과저장공간-원소개수만큼)

##### 완전탐색

- Permutation

> 순열이란 ? 서로 다른 n개의 항목 중에서 순서를 고려하여 중복 없이 r개를 택하는 것

> nPr = n!/(n-r)!

> 중복 순열

> 서로 다른 n개의 항목 중에서 순서를 고려하여 중복을 포함하여 r개를 택하는 것

> nΠr = n^r

- Combination

> 조합이란 ? 서로 다른 n개에서 순서를 생각하지 않고 r개를 뽑는 것

> nCr = nPr/r! = n!/((n-r)!r!)

> 중복조합

> 서로 다른 n개의 원소에서 중복을 허락하며 순서를 생각하지않고 r개를 뽑는 경우의 수이다.

> nHr = r+(n-1)Cr

- Subset

> 부분집합이란 ? A와 B가 있을떄 A의 모든 원소가 B에 포함되는 경우 A를 B의 부분집합이라 한다.

> 원소의 개수가 n일때 부분집합의 개수 2^n

##### Graph

- DFS

> 깊이우선탐색(DFS) : 그래프에서 모든노드를 방문하고할때 깊이를 우선으로 탐색하는 방법이다.

> 루트 또는 임의의 노드에서 시작해 다음 분기로 넘어가기전 해당분기를 완벽하게 탐색한다.

> 재귀 또는 스택을 사용하여 구현한다.

> 시간복잡도는 인접리스트의 경우 O(N+E), 인접행렬의 경우 O(N^2)이다.

- BFS

> 너비우선탐색(BFS) : 그래프에서 모든노드를 방문하고할때 너비를 우선으로 탐색하는 방법이다.

> 시작정점부터 가까운 정점을 먼저 방문하고 멀리떨어져 있는 정점을 나중에 방문하는 방법이다.

> 두 노드사이의 최단경로 또는 임의의 경로를 찾을때 많이 사용된다.

> 큐를 사용해 구현한다.

> 시간복잡도는 인접리스트의 경우 O(N+E),인접행렬의 경우 O(N^2)이다.

- 크루스칼

> 최소 비용 신장 트리(MST)를 구하는 알고리즘입니다.

> MST란 가장 적은 비용으로 모든 노드를 연결한 그래프입니다.

> MST에서는 사이클이 존재하지 않습니다.

> 내부적으로 Union-Find 알고리즘이 활용됩니다.

> 간선리스트에서 가중치가 낮은 간선을 우선적으로 선택해나가며, 사이클이 발생하는 경우 제외하고 다음 간선을 선택합니다. 간선의 개수가 V(정점의개수)-1개가 선택 되었을때, MST가 완성됩니다.

- 프림

> 최소 비용 신장 트리(MST)를 구하는 알고리즘입니다.

> 하나의 정점을 시작으로 해당 정점에 연결된 간선중 가중치가 최소인 간선을 우선으로 확인하여 해당 간선과 연결된 정점이 현재 만드는 신장트리에 포함되지 않았다면 선택합니다. 그리고 선택한 정점도 동일한 과정을 반복합니다. 모든 정점이 선택되면 MST가 완성됩니다.

- 다익스트라

> 하나의 정점에서 모든 정점까지의 최단 경로를 구하는 알고리즘입니다.

> 모든 간선의 가중치가 양의 가중치일때만 적용가능합니다.

> 첫정점을 기준으로 연결되어있는 정점들을 추가해가며, 최단거리를 갱신합니다.

> 정점 A,B가 이어진다고 할때 B가 가지는 최단거리는 MIN(시작점부터 A까지의 최단거리 + A,B간선의 가중치,기존에 가지고 있던 B의 최단거리)가 됩니다.
