let name2 = prompt("Введите имя:", "Гость");
alert(`Здравствуйте, ${name2}!` );

let firstNum = prompt("Введите первое число");
let secondNum = prompt("Введите второе число");

firstNum = +firstNum;
secondNum = +secondNum;

const sum = firstNum + secondNum;
const dif = firstNum - secondNum;
const product = firstNum * secondNum;
const quo = firstNum / secondNum;
alert(
    `Результат:
    Сумма - ${sum},
    Разность - ${dif},
    Произведение - ${product},
    Деление - ${quo}`
)