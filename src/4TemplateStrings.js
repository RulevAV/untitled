//шаблонные строки
function greet(name) {
    console.log(`Hello ${name}`);
}

greet('bill');

//Шаблонные строки поддерживают многосторонность
function greetEmaill(to,from,subject,message) {
    console.log(`
    To: ${to}
    From:${from}
    Subject:${subject}
    Message:${message}
    `);
}

greetEmaill('1','2',3,4);

function add(x,y)
{
    console.log(`${x} + ${y} = ${(parseInt(x)+parseInt(y))}`);
}
add(5,9);



//Тегирование
let name = 'Bill';
console.log(upperName `Hello ${name}! You are the best!!!!`);
function upperName(literals, value) {//literals - массив строковых литералов
    return literals[0] + value.toUpperCase() + literals[1];
}
function upperName2(literals, ...values) {//values - синтаксис оставшихся параметров функций.
    return literals[0] + values[0].toUpperCase() + literals[1];
}