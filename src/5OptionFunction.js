//Параметры функций
function greet(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting} ${name}`);
}
greet('hi','123');

function sum() {
    console.log(arguments);//arguments - объект (не массив) с параметрами
    var sum =0;
    Array.prototype.forEach.call(arguments, function (value) {
        sum += value;
    });
}
//или

function sum2(...values) {
    var sum =0;
    values.forEach(function (value) {
            sum += value;
    })
}
function sum3(...values) {
    values.reduce(function (prevValue,currentValue) {//prevValue = return
        return prevValue + currentValue;
    })
}
sum(5,7,2,10);
sum2(5,7,2,10);
sum3(5,7,2,10);