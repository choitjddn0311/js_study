/**
 * Array Functions
 */
let suckFamily = [
    '유현재',
    '김동균',
    '김태연',
    '배준호',
    '배성호',
    '최성우',
];

console.log(suckFamily);

//push() array 맨마지막에 꼬라박기
console.log(suckFamily.push('코드팩토리'));
console.log(suckFamily);

console.log('-----------------------------')

//pop()
console.log(suckFamily.pop());
console.log(suckFamily);

console.log('--------------------------');
//shift()
console.log(suckFamily.shift());
console.log(suckFamily);

//unshift()
console.log(suckFamily.unshift('노무현'));
console.log(suckFamily);

console.log('------------------------');

console.log(suckFamily.splice(0 , 3));
console.log(suckFamily);

suckFamily = [
    '유현재',
    '김동균',
    '김태연',
    '배준호',
    '배성호',
    '최성우',
];

console.log(suckFamily);

//concat()
console.log(suckFamily.concat('코드팩토리'));  //push 랑 기능은 비슷함 근데 array에 저장이 안되고 concat한 부분만 출력됨 다른점임 push랑
console.log(suckFamily);