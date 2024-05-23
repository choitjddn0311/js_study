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

//slice()
console.log(suckFamily.slice(0 , 3));
console.log(suckFamily);

//spread operator 
let suckFamily2 = [
    ...suckFamily,
];
console.log(suckFamily2);

let suckFamily3 = [
    suckFamily,
];
console.log(suckFamily3);

let suckFamily4 = suckFamily;

console.log(suckFamily4);
console.log(suckFamily4 === suckFamily);

// console.log([
//     ...suckFamily,
// ] === suckFamily);

//join()
console.log(typeof suckFamily.join());
console.log(suckFamily.join('/'));
console.log(suckFamily.join(', '));

//sort()
//오름차순
suckFamily.sort();
console.log(suckFamily);

console.log(suckFamily.reverse());

let nums = [
    1,
    9,
    7,
    5,
    3,
];
console.log(nums);

//a , b를 비교했을때
// 1) a를 b보다 나중에 정렬하려면(뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
nums.sort((a,b) => {
    return a > b ? 1: -1;
})
console.log(nums);

nums.sort((a,b) => a > b ? -1 : 1);
console.log(nums);


// map()
console.log('-------------------------------')
console.log(suckFamily.map((x) => x));
console.log(suckFamily.map((x) => `석패밀리: ${x}`))

console.log(suckFamily.map((x) => {
    if(x === '배성호') {
        return `석패밀리: ${x}`;
    }else {
        return x;
    }
}));

console.log(suckFamily);

// filter()
nums = [1,8,7,6,3];

console.log(nums.filter((x) => x % 2 !== 0));

//find()
console.log(nums.find((x) => x % 2 === 0));

//findIndex()
console.log(nums.findIndex((x) => x % 2 === 0)); //파인드와 똑같은데 인덱스 번호가뜸

//reduce()
console.log(nums.reduce((p,n) => p + n ,0));