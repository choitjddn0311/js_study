/**
 * Operators
 * 
 * 연산자
 */
/**
 * 산술연산자
 * 
 * 1)덧셈
 * 2)뺄셈
 * 3)곱셈
 * 4)나눗셈
 * 5)나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log('---------------');

console.log(10 * (10 + 10));



/**
 * 증가와 감소
 */
let number = 1;
number ++;
console.log(number);

number--;
console.log(number);
console.log('------------');

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number ++;
console.log(result , number);

result = number --;
console.log(result , number);

result = ++number;
console.log(result , number);

result = --number;
console.log(result , number);

/**
 * 숫자 타입이 아닌 타입에 + , - 사용하면 어캐될까?
 */
let sample = '99';

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = '안유진';
// NaN -> Not a Number
console.log(+sample);

sample = '99';
console.log(-sample);
console.log(typeof -sample);

/**
 * 할당연산자(assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number)

number -= 10;
console.log(number);

number *=10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/**
 * 비교연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');