/**
 * try ...catch
 * 
 * 1) 발생시킬때 -> 던진다고함 (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고 함 (catch)
 */
function runner() {
    try {
        console.log('choi');

        // throw new Error('큰 문제가 생겼습니다람쥐!'); //에러를 던지는 순간 함수정지 되어 다음것이 실행이안됨

        console.log('hello world');
    }catch(e){
        console.log('----catch----')
        // console.log(e)
    } finally {
        console.log('---finally---')
    }

}
runner();