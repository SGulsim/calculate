let a = ''; // firnum
let b = ''; // secnum
let sign = ''; //знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/', '%', '+/-'];

//экран калькулятора
const out = document.querySelector('.calc-screen p');


function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
    document.getElementsByClassName('btn ac bg-grey')[0].innerHTML = 'ac';
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {

    // нажата не кнопка
    if (!event.target.classList.contains('btn')) return;

    // нажата кнопка clearAll ac
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';

    // получаю нажатую кнопку
    const key = event.target.textContent;

    //если нажата кнопка 0-9 или .
    if (digit.includes(key)) {

        document.getElementsByClassName('btn ac bg-grey')[0].innerHTML = 'c';

        if (b === '' && sign === '') {
            a += key;
            console.log(a, b, sign);
            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }

    }


    // если нажата клавиша + - / * % +/-
    if (action.includes(key)) {
        sign = key;
        console.log(a, b, sign);
        return;
    }

    // нажата =
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'X':
                a = a * b;
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
            case '%':
                a = a * (b / 100);
                break;
            case '+/-':
                a = -1 * a;
                break;
        }
        finish = true;
        out.textContent = a;
    }
}