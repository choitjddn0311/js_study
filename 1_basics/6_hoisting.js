/**
 * Hoisting
 */
console.log('hello');
console.log('world');

// console.log(name); 
// var name = '코드팩토리';
// console.log(name);

// var name;
// console.log(name);
// name = '코드팩토리';
// console.log(name);

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다
 */


// hoisting이 되긴 됨 근데 오류남 아 머리론 이해되는데 못쓰겠노 쨌든 써봄 let으로 변수선언자체는 됐는데 값은 입력안됨  변수선언안하면 변수없다뜨기때매 ㅋ const도 마찬가지
console.log(yuJin);
const yuJin = '안유진'; 
