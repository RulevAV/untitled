//Symbol – новый примитивный тип данных в ES6.
// Они созданы для создания уникальных индификаторов свойств объекта.
// Символы являются уникальными и не именными значениями.
// Для поддержки в старых браузеров нужно установить npm install --save-dev babel-polyfill
let symbol = Symbol();//примитивный тип данных. Не является конструктором.
console.log(symbol);
let symbol2 = Symbol('name');//не обязательный параметр имя.
let symbol3 = Symbol('name');//не поподают в глобальный реестр.
console.log(symbol2);
console.log(symbol3);
console.log(symbol2===symbol3);//false

let symbol4 = Symbol.for('name');//метод for сначала пробует найти символ по имени и если его нет то создаст.
let symbol5 = Symbol.for('name');//благодаря for символ можно получить из любого места программы т.к. они записаны в глобальный реестр программы.
console.log(symbol4===symbol5);//true т.е. это один и тот же символ

let name = Symbol.keyFor(symbol5);

console.log(symbol5);
console.log(name);

let symbol6 = Symbol.for();//
let name2 = Symbol.keyFor(symbol6);//undefined

console.log(symbol6);
console.log(name2);

//В ES6 Свойства объекта могут быть либо строками либо символами.
let user = {
    username:'r2d2',
    [Symbol('password')] :'c3po',//не попал в глобальный реестр
    [Symbol.for('password2')] :'dron', //записан в глобальный реестр
    [Symbol()] :'dron' //никак не получить доступ; только если вынести в глобальную переменную.
}

console.log(user.password);//undefined
console.log(Object.keys(user))//password - нет
console.log(Object.getOwnPropertyNames(user))//password - нет

let password = user[Symbol.for('password')];
console.log(password);//undefined т.к. не попал в глобальный реестр

let password2 = user[Symbol.for('password2')];
console.log(password2);//dron

console.log(Object.getOwnPropertySymbols(user));//просмотр всех символов в объекте.


//Есть хорошо известные символы. или встроенные.

let object = {//этот метод используется конструкцией for of
    iterator : 0,
   [Symbol.iterator](){}
};




