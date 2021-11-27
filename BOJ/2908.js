// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString()
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("input.txt").toString();
// let input = fs.readFileSync('input.txt').toString().split('\n')

// ==================================================
const data = input.split(" ");

const a = Number(data[0].split("").reverse().join(""));
const b = Number(data[1].split("").reverse().join(""));

console.log(Math.max(a, b));

// ==================================================
/*
 시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	128 MB	64927	44746	38992	69.527%
문제
상근이의 동생 상수는 수학을 정말 못한다. 상수는 숫자를 읽는데 문제가 있다. 이렇게 수학을 못하는 상수를 위해서 상근이는 수의 크기를 비교하는 문제를 내주었다. 상근이는 세 자리 수 두 개를 칠판에 써주었다. 그 다음에 크기가 큰 수를 말해보라고 했다.

상수는 수를 다른 사람과 다르게 거꾸로 읽는다. 예를 들어, 734와 893을 칠판에 적었다면, 상수는 이 수를 437과 398로 읽는다. 따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다.

두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램을 작성하시오.

734 893

437

 */
