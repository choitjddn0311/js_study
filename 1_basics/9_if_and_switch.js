/**
 * If and Switch
 */
let number = 5;

if (number % 2 === 0){
    console.log('number 변수는 짝수입니다');
}else {
    console.log('number 변수는 홀수입니다.');
}

if (number % 2 === 0) {
    console.log('2의 배수입니다.');
}else if(number % 3 === 0) {
    console.log('3의 배수입니다.');
}else if(number % 4 === 0) {
    console.log('4의 배수입니다.');
}else if(number % 5 === 0) {
    console.log('5의 배수입니다.');
}else {
    console.log('2 , 3 , 4 , 5의 배수가 아닙니다.');
}

const englishDay = 'monday';

let KoreanDay;

// 스위치 문 문법 --> case ""
//                      변수명 = "";
//                      break;
//이런식인가봄 신귀스

switch(englishDay) {
    case 'monday' : 
        KoreanDay = '월요일';
        break;
    case 'tuesday' :
        KoreanDay = '화요일';
        break;
    case 'wedneday' :
        KoreanDay = '수요일';
        break;
    case 'thursday' :
        KoreanDay = '목요일';
        break;
    case 'friday' :
        KoreanDay = '금요일';
        break;
    default:
        KoreanDay = '주말';
        break;
};

console.log(KoreanDay);