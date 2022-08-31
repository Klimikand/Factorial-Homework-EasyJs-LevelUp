
// 2. // factorial - Returns a number that is the factorial of the given number.


function factorial(number){
    let answer = 1;
    if(number === 0 || number === 1) {
        return answer;
    } else {
        for (let i = number; i >= 1; i--) {
            answer *= i;
        }
        return answer;
    }
}

const result = factorial(6);

console.log(result)


// Проверка
// factorial(0)                        // 1
// factorial(1)                        // 1
// factorial(6)                        // 720
