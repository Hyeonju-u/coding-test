// ============================================================
// 문제 데이터 — 새 문제를 추가하려면 이 배열에 객체 하나만 더 넣으면 됨
//
// 공통 필드
//   id, lang('python' | 'c'), level(1~3), title, desc(HTML 가능)
//   starter : 처음 에디터에 들어갈 코드
//   hints   : 단계별 힌트 (앞에서부터 하나씩 열림)
//   answer  : 정답 코드
//   explain : 정답 해설 (줄 단위 설명 배열)
//
// Python 채점: tests = [{ call: '함수호출식', expected: '기대값(파이썬 식)' }]
// C 채점    : tests = [{ input: '표준입력', output: '기대 출력' }]
// ============================================================
window.PROBLEMS = [
// ---------------------------- Python ----------------------------
{
  id: 'py-max', lang: 'python', level: 1, title: '리스트 최댓값 직접 찾기',
  desc: `정수 리스트 <code>nums</code>가 주어질 때 가장 큰 값을 반환하는 <code>find_max(nums)</code>를 완성하세요.<br><b>조건:</b> 내장 함수 <code>max()</code>는 쓰지 않습니다. 리스트는 비어 있지 않습니다.`,
  starter: `def find_max(nums):
    # 여기에 코드를 작성하세요
    pass
`,
  tests: [
    { call: 'find_max([3, 9, 1, 7])', expected: '9' },
    { call: 'find_max([5])', expected: '5' },
    { call: 'find_max([-4, -2, -9])', expected: '-2' },
    { call: 'find_max([2, 2, 2])', expected: '2' },
  ],
  hints: [
    '지금까지 본 값 중 가장 큰 값을 기억해 둘 변수가 하나 필요해요.',
    '그 변수의 시작값은 0이 아니라 nums[0]이어야 해요. 왜일까요? → [-4, -2, -9]를 생각해 보세요.',
    'for x in nums: 로 하나씩 보면서, x가 기억해 둔 값보다 크면 바꿔치기하세요.',
  ],
  answer: `def find_max(nums):
    best = nums[0]
    for x in nums:
        if x > best:
            best = x
    return best
`,
  explain: [
    'best = nums[0] → 첫 원소로 시작. 0으로 시작하면 전부 음수일 때 0이 답이 되어버림.',
    'for x in nums → [3, 9, 1, 7]이면 x가 3 → 9 → 1 → 7 순서로 들어옴.',
    'if x > best: best = x → best는 3 → 9 → 9 → 9로 변함.',
    '시간복잡도 O(n): 원소를 한 번씩만 봄.',
  ],
},
{
  id: 'py-reverse', lang: 'python', level: 1, title: '문자열 뒤집기',
  desc: `문자열 <code>s</code>를 뒤집어서 반환하는 <code>reverse_string(s)</code>를 완성하세요.<br><b>도전:</b> 슬라이싱 <code>s[::-1]</code> 없이 반복문으로 풀어보세요.`,
  starter: `def reverse_string(s):
    # 여기에 코드를 작성하세요
    pass
`,
  tests: [
    { call: 'reverse_string("hello")', expected: '"olleh"' },
    { call: 'reverse_string("a")', expected: '"a"' },
    { call: 'reverse_string("")', expected: '""' },
    { call: 'reverse_string("정글")', expected: '"글정"' },
  ],
  hints: [
    '빈 문자열 result = "" 를 하나 만들어 두고 글자를 하나씩 붙여 나가면 돼요.',
    '"앞에 붙이기"를 하면 자연스럽게 뒤집혀요. "h" → "eh" → "leh" ...',
    'for ch in s: result = ch + result',
  ],
  answer: `def reverse_string(s):
    result = ""
    for ch in s:
        result = ch + result
    return result
`,
  explain: [
    's = "abc"일 때: ch="a" → result="a", ch="b" → "ba", ch="c" → "cba".',
    'result + ch 가 아니라 ch + result 인 게 핵심 (앞에 붙여야 뒤집힘).',
    '참고: 파이썬 문자열은 불변이라 매번 새 문자열이 만들어짐 → 실무에선 "".join(reversed(s)) 또는 s[::-1].',
  ],
},
{
  id: 'py-palindrome', lang: 'python', level: 1, title: '회문(팰린드롬) 판별',
  desc: `앞으로 읽어도 뒤로 읽어도 같은 문자열을 회문이라고 합니다. <code>is_palindrome(s)</code>가 회문이면 <code>True</code>, 아니면 <code>False</code>를 반환하도록 완성하세요.<br><b>도전:</b> 투 포인터(왼쪽 끝, 오른쪽 끝)로 풀어보세요.`,
  starter: `def is_palindrome(s):
    # 여기에 코드를 작성하세요
    pass
`,
  tests: [
    { call: 'is_palindrome("level")', expected: 'True' },
    { call: 'is_palindrome("abba")', expected: 'True' },
    { call: 'is_palindrome("abc")', expected: 'False' },
    { call: 'is_palindrome("a")', expected: 'True' },
    { call: 'is_palindrome("")', expected: 'True' },
  ],
  hints: [
    '왼쪽 인덱스 left = 0, 오른쪽 인덱스 right = len(s) - 1 에서 시작해 보세요. (왜 -1인지: 길이 5면 마지막 인덱스는 4)',
    'left < right 인 동안 반복하면서 s[left]와 s[right]를 비교해요. 다르면 바로 False.',
    '같으면 left += 1, right -= 1 로 가운데로 좁혀 오세요. 반복이 끝까지 가면 True.',
  ],
  answer: `def is_palindrome(s):
    left = 0
    right = len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True
`,
  explain: [
    '"level": (0,4) l=l → (1,3) e=e → (2,2)에서 left<right가 거짓이라 종료 → True.',
    '"abc": (0,2) a≠c → 즉시 False.',
    '빈 문자열이면 right = -1 → 반복문에 아예 안 들어가고 True.',
    '시간 O(n), 추가 공간 O(1).',
  ],
},
{
  id: 'py-count', lang: 'python', level: 2, title: '글자 빈도 세기 (딕셔너리)',
  desc: `문자열 <code>s</code>에서 각 글자가 몇 번 나오는지 딕셔너리로 반환하는 <code>count_chars(s)</code>를 완성하세요.<br>예: <code>"banana"</code> → <code>{'b': 1, 'a': 3, 'n': 2}</code><br><b>조건:</b> <code>collections.Counter</code>는 쓰지 않습니다.`,
  starter: `def count_chars(s):
    # 여기에 코드를 작성하세요
    pass
`,
  tests: [
    { call: 'count_chars("banana")', expected: "{'b': 1, 'a': 3, 'n': 2}" },
    { call: 'count_chars("")', expected: '{}' },
    { call: 'count_chars("aaa")', expected: "{'a': 3}" },
    { call: 'count_chars("ab ab")', expected: "{'a': 2, 'b': 2, ' ': 1}" },
  ],
  hints: [
    '빈 딕셔너리 counts = {} 를 만들고, 글자를 key, 횟수를 value로 쓰세요.',
    '처음 보는 글자면 counts[ch] = 1, 이미 있으면 counts[ch] += 1. "이미 있는지"는 ch in counts 로 확인해요.',
    '한 줄 버전: counts[ch] = counts.get(ch, 0) + 1  (get은 key가 없으면 두 번째 인자를 돌려줘요)',
  ],
  answer: `def count_chars(s):
    counts = {}
    for ch in s:
        if ch in counts:
            counts[ch] += 1
        else:
            counts[ch] = 1
    return counts
`,
  explain: [
    '"banana": b → {b:1}, a → {b:1,a:1}, n → {..,n:1}, a → a:2, n → n:2, a → a:3.',
    'counts[ch] += 1 을 key가 없는 상태에서 하면 KeyError → 그래서 in으로 먼저 확인.',
    '딕셔너리 조회/삽입은 평균 O(1) → 전체 O(n).',
  ],
},
{
  id: 'py-twosum', lang: 'python', level: 2, title: '두 수의 합',
  desc: `정수 리스트 <code>nums</code>와 <code>target</code>이 주어집니다. 더해서 <code>target</code>이 되는 두 원소의 인덱스를 <code>[i, j]</code> (i &lt; j) 로 반환하세요. 답은 항상 정확히 하나 있습니다.<br><b>도전:</b> 이중 for문(O(n²)) 말고 딕셔너리로 O(n)에 풀어보세요.`,
  starter: `def two_sum(nums, target):
    # 여기에 코드를 작성하세요
    pass
`,
  tests: [
    { call: 'two_sum([2, 7, 11, 15], 9)', expected: '[0, 1]' },
    { call: 'two_sum([3, 2, 4], 6)', expected: '[1, 2]' },
    { call: 'two_sum([3, 3], 6)', expected: '[0, 1]' },
    { call: 'two_sum([1, 5, 8, 2], 10)', expected: '[2, 3]' },
  ],
  hints: [
    '먼저 이중 for문으로 풀어도 OK. 통과하면 O(n) 버전에 도전!',
    'x를 보고 있을 때 필요한 짝은 target - x 예요. "지금까지 본 값 → 그 인덱스"를 딕셔너리에 저장해 두면 짝이 있었는지 바로 알 수 있어요.',
    'for i, x in enumerate(nums): 안에서 ① need = target - x ② need가 seen에 있으면 [seen[need], i] 반환 ③ 없으면 seen[x] = i',
  ],
  answer: `def two_sum(nums, target):
    seen = {}            # 값 -> 인덱스
    for i, x in enumerate(nums):
        need = target - x
        if need in seen:
            return [seen[need], i]
        seen[x] = i
`,
  explain: [
    '[2, 7, 11, 15], 9: i=0 x=2 need=7 없음 → seen={2:0} / i=1 x=7 need=2 있음 → [0, 1].',
    '검사(②)를 저장(③)보다 먼저 해야 [3, 3]에서 자기 자신과 짝을 짓지 않음.',
    '이중 for문은 O(n²), 딕셔너리 버전은 O(n).',
  ],
},
{
  id: 'py-brackets', lang: 'python', level: 2, title: '괄호 짝 검사 (스택)',
  desc: `<code>()</code>, <code>[]</code>, <code>{}</code>로만 이루어진 문자열 <code>s</code>가 올바르게 짝지어져 있으면 <code>True</code>, 아니면 <code>False</code>를 반환하는 <code>is_valid(s)</code>를 완성하세요.<br>예: <code>"([]{})"</code> → True, <code>"(]"</code> → False, <code>"(("</code> → False`,
  starter: `def is_valid(s):
    # 여기에 코드를 작성하세요
    pass
`,
  tests: [
    { call: 'is_valid("()")', expected: 'True' },
    { call: 'is_valid("([]{})")', expected: 'True' },
    { call: 'is_valid("(]")', expected: 'False' },
    { call: 'is_valid("((")', expected: 'False' },
    { call: 'is_valid(")(")', expected: 'False' },
    { call: 'is_valid("")', expected: 'True' },
  ],
  hints: [
    '"가장 최근에 열린 괄호가 가장 먼저 닫혀야 한다" → 나중에 들어간 게 먼저 나오는 자료구조는?',
    '스택 = 파이썬 리스트. 여는 괄호면 append, 닫는 괄호면 pop 해서 짝이 맞는지 확인해요. 짝 정보는 pair = {")": "(", "]": "[", "}": "{"} 같은 딕셔너리로.',
    '실패 조건 3가지: ① 닫는 괄호인데 스택이 비어 있음 ② pop한 게 짝이 아님 ③ 다 돌았는데 스택에 남아 있음',
  ],
  answer: `def is_valid(s):
    pair = {")": "(", "]": "[", "}": "{"}
    stack = []
    for ch in s:
        if ch in "([{":
            stack.append(ch)
        else:
            if not stack or stack.pop() != pair[ch]:
                return False
    return len(stack) == 0
`,
  explain: [
    '"([])": ( → [(] / [ → [(, [] / ] → pop "[" 짝 맞음 → [(] / ) → pop "(" → [] → 비었으니 True.',
    'not stack 검사를 먼저 해야 빈 스택에서 pop() 할 때 나는 IndexError를 막음 (")(" 케이스).',
    '마지막 len(stack) == 0 이 "((" 같은 케이스를 잡음.',
  ],
},
{
  id: 'py-bsearch', lang: 'python', level: 2, title: '이진 탐색',
  desc: `오름차순 정렬된 리스트 <code>nums</code>에서 <code>target</code>의 인덱스를 반환하고, 없으면 <code>-1</code>을 반환하는 <code>binary_search(nums, target)</code>를 완성하세요.<br><b>조건:</b> <code>nums.index()</code>, <code>in</code> 같은 선형 탐색은 쓰지 않습니다.`,
  starter: `def binary_search(nums, target):
    # 여기에 코드를 작성하세요
    pass
`,
  tests: [
    { call: 'binary_search([1, 3, 5, 7, 9], 7)', expected: '3' },
    { call: 'binary_search([1, 3, 5, 7, 9], 1)', expected: '0' },
    { call: 'binary_search([1, 3, 5, 7, 9], 9)', expected: '4' },
    { call: 'binary_search([1, 3, 5, 7, 9], 4)', expected: '-1' },
    { call: 'binary_search([], 3)', expected: '-1' },
  ],
  hints: [
    '탐색 범위를 lo = 0, hi = len(nums) - 1 로 잡고, 가운데 mid = (lo + hi) // 2 를 확인해요.',
    'nums[mid] < target 이면 답은 오른쪽 → lo = mid + 1. 크면 왼쪽 → hi = mid - 1. (mid는 이미 확인했으니 +1/-1)',
    '반복 조건은 lo <= hi (같을 때도 원소 1개가 남아 있으니 확인해야 함). 끝까지 못 찾으면 -1.',
  ],
  answer: `def binary_search(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1
`,
  explain: [
    '[1,3,5,7,9], 7: lo=0 hi=4 mid=2(5<7) → lo=3 / lo=3 hi=4 mid=3(7) → 3 반환.',
    'target=4: mid=2(5>4) → hi=1 / mid=0(1<4) → lo=1 / mid=1(3<4) → lo=2 > hi=1 → -1.',
    'lo < hi 로 쓰면 원소가 1개 남았을 때 확인을 안 해서 9 같은 끝값을 놓침.',
    '매번 범위가 절반 → O(log n).',
  ],
},
{
  id: 'py-fib', lang: 'python', level: 3, title: '피보나치 (메모이제이션)',
  desc: `<code>fib(0) = 0</code>, <code>fib(1) = 1</code>, <code>fib(n) = fib(n-1) + fib(n-2)</code> 입니다. <code>fib(n)</code>을 완성하세요.<br><b>주의:</b> <code>fib(80)</code>도 테스트합니다. 단순 재귀로 짜면 시간 초과가 날 거예요 — 직접 확인해 보세요!`,
  starter: `def fib(n):
    # 여기에 코드를 작성하세요
    pass
`,
  tests: [
    { call: 'fib(0)', expected: '0' },
    { call: 'fib(1)', expected: '1' },
    { call: 'fib(10)', expected: '55' },
    { call: 'fib(80)', expected: '23416728348467685' },
  ],
  hints: [
    '단순 재귀는 fib(5)를 구할 때 fib(3)을 2번, fib(2)를 3번... 같은 계산을 계속 반복해요. 호출 횟수가 대략 2ⁿ 으로 늘어나요.',
    '방법 ①: 한 번 구한 값을 딕셔너리 memo에 저장해 두고, 있으면 바로 꺼내 쓰기 (탑다운).',
    '방법 ②: 재귀 없이 a, b = 0, 1 에서 시작해 n번 a, b = b, a + b 하기 (바텀업). 이게 제일 간단해요.',
  ],
  answer: `def fib(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
`,
  explain: [
    'n=5: (a,b) = (0,1) → (1,1) → (1,2) → (2,3) → (3,5) → (5,8). 5번 반복 후 a=5.',
    'range(n)은 0..n-1, 즉 정확히 n번 반복.',
    'a, b = b, a + b 는 오른쪽을 먼저 다 계산한 뒤 대입 → 임시 변수가 필요 없음.',
    '단순 재귀 O(2ⁿ) → 반복문 O(n). 메모이제이션 재귀도 O(n).',
  ],
},
// ---------------------------- C ----------------------------
{
  id: 'c-max', lang: 'c', level: 1, title: '배열 최댓값',
  desc: `정수 배열 <code>arr</code>과 길이 <code>n</code>을 받아 가장 큰 값을 반환하는 <code>maxOf</code> 함수를 완성하세요. <code>main</code>은 이미 작성되어 있습니다 (입력: 첫 줄 n, 다음 줄 n개의 정수).`,
  starter: `#include <stdio.h>

int maxOf(int arr[], int n) {
    // 여기에 코드를 작성하세요
    return 0;
}

int main() {
    int n, x;
    int arr[100];
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &x);
        arr[i] = x;
    }
    printf("%d\\n", maxOf(arr, n));
    return 0;
}
`,
  tests: [
    { input: '4\n3 9 1 7', output: '9' },
    { input: '1\n5', output: '5' },
    { input: '3\n-4 -2 -9', output: '-2' },
  ],
  hints: [
    '파이썬 find_max와 똑같은 생각이에요. 시작값은 arr[0].',
    'for (int i = 1; i < n; i++) — 0번은 이미 시작값으로 썼으니 1부터 봐도 돼요.',
    'if (arr[i] > m) m = arr[i];',
  ],
  answer: `#include <stdio.h>

int maxOf(int arr[], int n) {
    int m = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > m) {
            m = arr[i];
        }
    }
    return m;
}

int main() {
    int n, x;
    int arr[100];
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &x);
        arr[i] = x;
    }
    printf("%d\\n", maxOf(arr, n));
    return 0;
}
`,
  explain: [
    'int arr[] 매개변수는 사실 int *arr 와 같음 → 배열 전체가 복사되는 게 아니라 첫 칸 주소가 넘어옴. 그래서 길이 n을 따로 받아야 함.',
    'n=4, arr={3,9,1,7}: i=1 → 9>3 m=9 / i=2 → 1 / i=3 → 7 → 결과 9.',
  ],
},
{
  id: 'c-swap', lang: 'c', level: 1, title: '포인터로 두 값 바꾸기',
  desc: `두 정수의 값을 서로 바꾸는 <code>swap</code> 함수를 완성하세요. 입력은 두 정수 <code>a b</code>이고, 바뀐 결과를 출력합니다.<br>왜 매개변수가 <code>int *</code> 인지 생각해 보세요.`,
  starter: `#include <stdio.h>

void swap(int *a, int *b) {
    // 여기에 코드를 작성하세요
}

int main() {
    int x, y;
    scanf("%d %d", &x, &y);
    swap(&x, &y);
    printf("%d %d\\n", x, y);
    return 0;
}
`,
  tests: [
    { input: '1 2', output: '2 1' },
    { input: '10 -3', output: '-3 10' },
    { input: '7 7', output: '7 7' },
  ],
  hints: [
    'a는 x가 "어디 있는지"(주소)고, *a는 "그 주소에 있는 값"(= x 자체)이에요.',
    '값 하나를 잠깐 보관할 임시 변수 int temp 가 필요해요. 컵 두 개의 물을 바꿀 때 빈 컵이 필요한 것처럼.',
    'temp = *a;  →  *a = *b;  →  *b = temp;',
  ],
  answer: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x, y;
    scanf("%d %d", &x, &y);
    swap(&x, &y);
    printf("%d %d\\n", x, y);
    return 0;
}
`,
  explain: [
    'x=1, y=2: temp = *a = 1 → *a = *b 로 x=2 → *b = temp 로 y=1.',
    'C는 call by value: void swap(int a, int b)로 짜면 복사본만 바뀌고 main의 x, y는 그대로. 그래서 주소(&x)를 넘기고 *a로 원본을 고침.',
    'int *a(선언 자리) vs *a(표현식 자리) — 앞에 자료형이 있으면 선언, 없으면 "그 주소로 가라".',
  ],
},
{
  id: 'c-reverse', lang: 'c', level: 1, title: '배열 뒤집기 (제자리)',
  desc: `배열 <code>arr</code>를 새 배열 없이 <b>제자리에서</b> 뒤집는 <code>reverseArray</code>를 완성하세요. 입력: 첫 줄 n, 다음 줄 n개의 정수.`,
  starter: `#include <stdio.h>

void reverseArray(int arr[], int n) {
    // 여기에 코드를 작성하세요
}

int main() {
    int n, x;
    int arr[100];
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &x);
        arr[i] = x;
    }
    reverseArray(arr, n);
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    return 0;
}
`,
  tests: [
    { input: '5\n1 2 3 4 5', output: '5 4 3 2 1' },
    { input: '4\n1 2 3 4', output: '4 3 2 1' },
    { input: '1\n9', output: '9' },
  ],
  hints: [
    '회문 판별의 투 포인터와 같은 모양이에요. 양 끝을 바꾸고 가운데로 좁혀 와요.',
    'i번째와 짝이 되는 반대편 인덱스는 n - 1 - i 예요. n=5면 0↔4, 1↔3, 2↔2.',
    '끝까지 돌면 다시 원래대로 돌아가 버려요! 반복은 i < n / 2 까지만.',
  ],
  answer: `#include <stdio.h>

void reverseArray(int arr[], int n) {
    for (int i = 0; i < n / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }
}

int main() {
    int n, x;
    int arr[100];
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &x);
        arr[i] = x;
    }
    reverseArray(arr, n);
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    return 0;
}
`,
  explain: [
    'n=5: n/2 = 2 (정수 나눗셈) → i=0: 0↔4, i=1: 1↔3. 가운데(2)는 그대로.',
    'n=4: n/2 = 2 → 0↔3, 1↔2.',
    '배열은 주소로 넘어오므로 함수 안에서 바꾼 게 main의 arr에도 그대로 반영됨 (swap 문제와 같은 원리).',
  ],
},
{
  id: 'c-factorial', lang: 'c', level: 1, title: '재귀로 팩토리얼',
  desc: `<code>n! = n × (n-1) × ... × 1</code>, 그리고 <code>0! = 1</code> 입니다. <b>재귀</b>로 <code>factorial</code>을 완성하세요. (0 ≤ n ≤ 12)`,
  starter: `#include <stdio.h>

int factorial(int n) {
    // 여기에 코드를 작성하세요 (재귀로!)
    return 0;
}

int main() {
    int n;
    scanf("%d", &n);
    printf("%d\\n", factorial(n));
    return 0;
}
`,
  tests: [
    { input: '0', output: '1' },
    { input: '1', output: '1' },
    { input: '5', output: '120' },
    { input: '12', output: '479001600' },
  ],
  hints: [
    '재귀 함수에는 두 부분이 필요해요: ① 멈추는 조건(base case) ② 자기 자신을 더 작은 문제로 부르는 부분.',
    '멈추는 조건: n이 0이면 1을 반환.',
    '나머지: n! = n × (n-1)! → return n * factorial(n - 1);',
  ],
  answer: `#include <stdio.h>

int factorial(int n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

int main() {
    int n;
    scanf("%d", &n);
    printf("%d\\n", factorial(n));
    return 0;
}
`,
  explain: [
    'factorial(3) = 3 * factorial(2) = 3 * (2 * factorial(1)) = 3 * 2 * (1 * factorial(0)) = 3 * 2 * 1 * 1 = 6.',
    'base case가 없으면 factorial(-1), (-2)... 끝없이 호출 → 스택 오버플로우.',
    'n ≤ 12 제한 이유: 13! = 6,227,020,800 은 int 최댓값(약 21억)을 넘음.',
  ],
},
{
  id: 'c-bubble', lang: 'c', level: 2, title: '버블 정렬',
  desc: `배열을 오름차순으로 정렬하는 <code>bubbleSort</code>를 완성하세요. 이웃한 두 원소를 비교해서 앞이 더 크면 바꾸는 과정을 반복합니다. 입력: 첫 줄 n, 다음 줄 n개의 정수.`,
  starter: `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    // 여기에 코드를 작성하세요
}

int main() {
    int n, x;
    int arr[100];
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &x);
        arr[i] = x;
    }
    bubbleSort(arr, n);
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    return 0;
}
`,
  tests: [
    { input: '5\n5 1 4 2 3', output: '1 2 3 4 5' },
    { input: '3\n1 2 3', output: '1 2 3' },
    { input: '4\n4 3 2 1', output: '1 2 3 4' },
    { input: '1\n7', output: '7' },
  ],
  hints: [
    '한 바퀴(arr[0]과 arr[1], arr[1]과 arr[2], ... 비교) 돌면 가장 큰 값이 맨 뒤로 "떠올라요". 이걸 n-1번 반복하면 정렬 끝.',
    '바깥 for (i = 0; i < n - 1; i++) 는 몇 바퀴째인지, 안쪽 for (j = 0; j < n - 1 - i; j++) 는 이번 바퀴에 비교할 위치예요. 왜 -i? 뒤쪽 i개는 이미 자리 잡았으니까.',
    'if (arr[j] > arr[j + 1]) { temp로 둘을 바꾸기 } — j + 1이 범위를 넘지 않으려면 j는 n-2까지만 가야 해서 j < n - 1.',
  ],
  answer: `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int n, x;
    int arr[100];
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &x);
        arr[i] = x;
    }
    bubbleSort(arr, n);
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    return 0;
}
`,
  explain: [
    '[5,1,4,2,3] 1바퀴(i=0, j=0..3): 5↔1 → 5↔4 → 5↔2 → 5↔3 → [1,4,2,3,5] (5가 맨 뒤로).',
    '2바퀴(i=1, j=0..2): [1,2,3,4,5]. 이후 바퀴는 바꿀 게 없음.',
    'n=5면 바깥 i = 0,1,2,3 (4바퀴), 안쪽 비교 횟수 4,3,2,1 → 총 10 = n(n-1)/2 → O(n²).',
  ],
},
{
  id: 'c-vowel', lang: 'c', level: 2, title: '모음 개수 세기 (문자열)',
  desc: `영어 소문자 문자열에서 모음(<code>a e i o u</code>)의 개수를 반환하는 <code>countVowels</code>를 완성하세요. <code>strlen</code> 없이 <code>'\\0'</code>을 만날 때까지 도는 방식으로 풀어보세요.`,
  starter: `#include <stdio.h>

int countVowels(char s[]) {
    // 여기에 코드를 작성하세요
    return 0;
}

int main() {
    char s[101];
    scanf("%s", s);
    printf("%d\\n", countVowels(s));
    return 0;
}
`,
  tests: [
    { input: 'banana', output: '3' },
    { input: 'rhythm', output: '0' },
    { input: 'aeiou', output: '5' },
    { input: 'krafton', output: '2' },
  ],
  hints: [
    'C 문자열은 char 배열이고, 끝에 널 문자 \'\\0\'이 붙어 있어요. "banana"는 실제로 7칸: b a n a n a \\0',
    'for (int i = 0; s[i] != \'\\0\'; i++) 로 끝까지 돌 수 있어요.',
    'char는 \'a\' 처럼 작은따옴표로 비교해요. "a"(큰따옴표)는 문자열이라 비교가 안 돼요. → if (s[i] == \'a\' || s[i] == \'e\' || ...)',
  ],
  answer: `#include <stdio.h>

int countVowels(char s[]) {
    int count = 0;
    for (int i = 0; s[i] != '\\0'; i++) {
        char c = s[i];
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            count++;
        }
    }
    return count;
}

int main() {
    char s[101];
    scanf("%s", s);
    printf("%d\\n", countVowels(s));
    return 0;
}
`,
  explain: [
    '"banana": i=0 b, 1 a(+1), 2 n, 3 a(+1), 4 n, 5 a(+1), 6에서 \'\\0\' → 종료. count=3.',
    'char s[101]: 최대 100글자 + \'\\0\' 1칸.',
    '\'\\0\'을 못 찾으면(널 종료 안 된 배열) 배열 밖 메모리까지 읽음 → C 문자열 버그의 대표 원인.',
  ],
},
{
  id: 'c-bsearch', lang: 'c', level: 2, title: '이진 탐색 (C)',
  desc: `오름차순 배열에서 <code>target</code>의 인덱스를, 없으면 <code>-1</code>을 반환하는 <code>binarySearch</code>를 완성하세요. 입력: 첫 줄 n, 둘째 줄 n개의 정수, 셋째 줄 target.`,
  starter: `#include <stdio.h>

int binarySearch(int arr[], int n, int target) {
    // 여기에 코드를 작성하세요
    return -1;
}

int main() {
    int n, x, target;
    int arr[100];
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &x);
        arr[i] = x;
    }
    scanf("%d", &target);
    printf("%d\\n", binarySearch(arr, n, target));
    return 0;
}
`,
  tests: [
    { input: '5\n1 3 5 7 9\n7', output: '3' },
    { input: '5\n1 3 5 7 9\n1', output: '0' },
    { input: '5\n1 3 5 7 9\n9', output: '4' },
    { input: '5\n1 3 5 7 9\n4', output: '-1' },
  ],
  hints: [
    '파이썬 이진 탐색 문제를 먼저 풀었다면 그대로 옮기면 돼요. lo = 0, hi = n - 1.',
    'C에서 정수끼리 나누면 자동으로 소수점이 버려져요 → mid = (lo + hi) / 2; (파이썬의 // 와 같은 역할)',
    'while (lo <= hi) { ... } 안에서 같으면 return mid, 작으면 lo = mid + 1, 크면 hi = mid - 1.',
  ],
  answer: `#include <stdio.h>

int binarySearch(int arr[], int n, int target) {
    int lo = 0, hi = n - 1;
    while (lo <= hi) {
        int mid = (lo + hi) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
}

int main() {
    int n, x, target;
    int arr[100];
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &x);
        arr[i] = x;
    }
    scanf("%d", &target);
    printf("%d\\n", binarySearch(arr, n, target));
    return 0;
}
`,
  explain: [
    'target=9: (0,4) mid=2 5<9 → lo=3 / (3,4) mid=3 7<9 → lo=4 / (4,4) mid=4 → 4 반환.',
    'lo < hi 였다면 (4,4)에서 반복이 안 돌아서 -1을 잘못 반환함.',
    '참고: 아주 큰 배열에선 lo + hi가 int 범위를 넘을 수 있어서 mid = lo + (hi - lo) / 2 로 쓰기도 함.',
  ],
},
];
