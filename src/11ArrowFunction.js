// Стрелочные функции – они предлагают более компактный синтаксис, у них нет имени и они по своему работают с this.
// Стрелочные функции не является функцией конструктором – нет prototype
// Нет Bind, Call, apply - т.к. не может изменить значение this.
let add = (x,y)=>x + y;//typeof = function
console.log(add(1,2));// 7

let square = x => x * x;
console.log(square(2)); //4

let givMeAnwer = () => 42;
console.log(givMeAnwer());

let log = ()=>console.log('log');
log();

let multiply = (x,y) => {
    let  result = x * y;
    return result;
};
console.log(multiply(3,4));

let getPerson = () => ({name:'Jone'});//Если возращаем литерал объекта но нужно обернуть его в ();

console.log(getPerson());

//IIFE - Immediately invoked function expression - Вызываемое немедленно выоажение функций. ИФИ
//Пример
(function f() {console.log('IIFE');})();

//Стрелочная
(()=>console.log('IIFE'))();

let numbers = [1,2,3,4,5,6,7,8,9,10];

let sum = 0;
numbers.forEach(function (num) {
    sum += num;
});
console.log(sum);

sum = 0;
numbers.forEach(num =>  sum += num);
console.log(sum);

let squared = numbers.map(n=>n*n);
console.log(squared);

//Как стрелочные функции работают с объектами.
let performance = {
    name:'bob',
    greet: function () {
        console.log('Hello? my name is ' + this.name);
        console.log(this);//будет объект performance
    }
}
performance.greet();


let performance2 = {
    name:'bob',
    greet: () => {
        console.log('Hello? my name is ' + this.name);
        console.log(this);//будет объект Window т.к. В стрелочной функции this берется из контекста, где она объявлена.
    }
}
performance2.greet();

//Стрелочные функции были нужны для решения некоторых проблем.
//Пример
let performance3 = {
    name:'bob',
    greet: function () {
        setTimeout(function () {//Window.setTimeout
            console.log('Hello? my name is ' + this.name);
            console.log(this);//будет объект Window т.к. setTimeout пренадлежит объекту Window
        },2000);
    }
}
performance3.greet();
//Решение этой проблемы с помощью ES5
let performance4 = {
    name:'bob',
    greet: function () {
        var that = this; //Благодаря замыканию
        setTimeout(function () {//Window.setTimeout
            console.log('Hello? my name is ' + that.name);
            console.log(that);////будет объект performance
        },2000);
    }
}
performance4.greet();
//Решение этой проблемы с помощью ES6
let performance5 = {
    name:'bob',
    greet: function () {
        setTimeout(() => {//Window.setTimeout
            console.log('Hello? my name is ' + this.name);
            console.log(this);////будет объект performance
        },2000);
    }
}
performance5.greet();
