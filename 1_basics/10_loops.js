/**
 * Loops
 * 
 * 1) for
 * 2) while
 */
for(let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('-----------');

for(let i = 10; i > 0; i --) {
    console.log(i);
}

console.log('-----------');

for(let i = 0; i < 3; i++) {
    for(let j = 3; j > 0; j--){
        console.log(i,j);
    }
}

// *을 이용해서 6X6의 정사각형을 출력
let square = '';
let side = 6;

for(let i = 0; i < 6; i++) {
    for(let j = 0; j < side; j++) {
        square += ' *';
    }
    square += '\n';
}

console.log(square);

/** 
 * for...in
 */
const yuJin = {
    name: '안유진',
    year: 2003,
    group: '아이브',
}

console.log('--------------')

for(let key in yuJin) {
    console.log(key);
}

const suckFamily = ['김태연' , '배준호' , '김동균' , '배성호' , '유현재' , '이윤상'];

for(let key in suckFamily){
    console.log(key);
    console.log(`${key}:${suckFamily[key]}`)
}

/**
 * for ... of
 */
for(let value of suckFamily){
    console.log(value);
}

/**
 * while
 */
let number = 0;

while(number < 10){
    number ++;
}

console.log(number);

/**
 * do... while
 */
number = 0;

do{
    number++;
}while(number < 10);

console.log(number);

/**
 * break
 */
console.log('------------')
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        break;
    }
    console.log(i);
}

console.log('---------------')
number = 0;

while(number < 10) {
    if(number == 5){
        break;
    }

    number ++;
    console.log(number);
}

/** 
 * countinue
 */
for(let i = 0; i <10; i++) {
    if(i === 5){
        continue;
    }
    console.log(i);
}

console.log('-------------------');
number = 0;

while(number < 10) {
    number ++;

    if(number === 5){
        continue;
    }
    
    console.log(number);
}