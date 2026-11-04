# 코테 연습장

Python / C 코딩 테스트 연습 페이지. 직접 짜고 → 막히면 힌트를 하나씩 → 그래도 막히면 답.

## 구조

| 파일 | 역할 |
|---|---|
| `index.html` | 화면, 에디터, 채점 로직 |
| `problems.js` | 문제 데이터 (문제 추가는 여기만 고치면 됨) |
| `jscpp.min.js` | 브라우저용 C 인터프리터 ([JSCPP](https://github.com/felixhao28/JSCPP) 번들) |

- Python은 [Pyodide](https://pyodide.org)(브라우저 안의 실제 CPython)로 실행
- 둘 다 Web Worker에서 돌아서 무한 루프가 나도 페이지가 멈추지 않음 (시간 초과 시 워커 재시작)
- 코드와 진행 상황은 브라우저 localStorage에 저장

## 문제 추가하기

`problems.js`의 `PROBLEMS` 배열에 객체를 하나 추가:

```js
{
  id: 'py-example', lang: 'python', level: 1, title: '제목',
  desc: '문제 설명 (HTML 가능)',
  starter: 'def solve(x):\n    pass\n',
  tests: [{ call: 'solve(1)', expected: '2' }],   // C는 { input: '...', output: '...' }
  hints: ['힌트1', '힌트2', '힌트3'],
  answer: '정답 코드',
  explain: ['해설 줄1', '해설 줄2'],
}
```

## C 실행기 한계

JSCPP는 간이 인터프리터라 `struct`, `malloc`이 안 되고, `scanf("%d", &arr[i])`처럼 배열 칸에 바로 입력받을 수 없음 (변수로 받은 뒤 대입). 연결 리스트/트리 문제는 로컬 gcc로.
