/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진입니다.';
console.log('--------------------------');
console.log(original);
console.log(clone);

let originalObj = {
    name : '안유진',
    group: '아이브',
}
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('----------------')

originalObj['group'] = '섹스파티';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
    name: '최지호',
    group: '코드팩토리',
};
cloneObj = {
    name: '최지호',
    group: '코드팩토리',
};
console.log(originalObj === cloneObj);

//test

const yuJin1 = {
    name: '안유진',
    group: '아이브',
}
const yuJin2 = yuJin1;
const yuJin3 = {
    name: '안유진',
    group: '아이브',
}

console.log(yuJin1 === yuJin2);  //true 같은 공간을 가리키기에 똑같음
console.log(yuJin1 === yuJin3); //false 같은 값이지만 데이터위치가 달라서
console.log(yuJin2 === yuJin3); //false 이것도 yuJin1 == yuJin2와 같으니 yuJin2랑 yuJin3은 false가 나올수밖에

/**
 * Spread Operator
 */
const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4);

console.log(yuJin4 === yuJin3);

const yuJin5 = {
    year: 2003,
    ...yuJin3,
}
console.log(yuJin5);

const yuJin6 = {
    name: '코드팩토리',
    ...yuJin3,
};
console.log(yuJin6);

const yuJin7 = {
    ...yuJin3,
    name: '최성우',
}
console.log(yuJin7);

//spread는 순서가 중요함

const numbers = [1,3,5];
const numbers2 = [
    ...numbers,
    10,
];
console.log(numbers2);

//array에서는 순서가 바뀜 위치에 따라