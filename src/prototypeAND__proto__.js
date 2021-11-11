//prototype __proto__
// prototype – это не зависимый объект, сам по себе, с определенным набором свойств и методов.
// __proto__ - любого объекта ссылается на Prototype класса (функции конструктора) с помочью которой этот объект был создан(сконструирован).
// __proto__ - есть у всех объектов.

/*let age = 21;
console.log(age.__proto__=== Number.prototype); // true.
console.log(age.prototype===undefined); // true.*/

//1) Зачем нужен prototype?
function piople(name) {
    this.name = name;
}
let name = new piople("bob");
let namee = new piople("bob");
//или
class piople2 {
    constructor(name)
    {
        this.name = name;
    }
}
let name2 = new piople2("bob2");
let namee2 = new piople2("bob2");

console.log(name);
console.log(name2);
// Мы создали класс piople, а name – это экземпляр класса.
// Prototype – это хранилище общих методов и свойств одного класса.(ООП js).

// 2) Как добавить новый prototype?
function Sumurai(name) {
    this.name = name;
}
Sumurai.Count = 0; //Статическая переменная
Sumurai.prototype.hello = function () {
    console.log(this.name);
}
let sumurai = new Sumurai("sumurai");
let sumurai2 = new Sumurai("sumurai2");
let sumurai3 = new Sumurai("sumurai3");
sumurai.hello();
sumurai2.hello();
sumurai3.hello();
// или
class Animals {
    constructor(name) {
        this.name = name;
    }
    hello(){
        console.log(this.name);
    }
}
Animals.Count = 0; //Статическая переменная
let animals = new Animals("animals");
let animals2 = new Animals("animals2");
let animals3 = new Animals("animals3");
animals.hello();
animals2.hello();
animals3.hello();

// 3 Примеры
//1
console.log(({}).prototype === ({}).prototype); //true;
//2
function f2(){};
console.log(f2.prototype === f2.__proto__); //false;
// f1.prototype новый, не зависимый объект (object), f2.__proto__ = function.prototype
//3 4
function f3(){};
function f4(){};
console.log(f3.__proto__ === f4.__proto__); //true;
console.log(f3.prototype === f4.prototype); //false;
//5
let Component = (props)=>{ // у стрелоыной функции нет prototype = undefined
    return '<div></div>>';
}
console.log(Component.prototype === Object.prototype); //false;
//6 7
let age = 27;
console.log(age.prototype === Number.prototype);//fulse
console.log(age.__proto__ === Number.prototype);//true
//8
class Hacker {
}
console.log(Hacker.__proto__ === Hacker.prototype);//fulse

//9
function f9() {}
//f9 создалась new function => f9.__proto__ = function.prototype
//console.log(f9.__proto__ === function.prototype);//true

//10
const count = 123;
console.log(count.__proto__ === Number.prototype);//true

//Продолжение
class Samurai {
    constructor(name) {
        this.name = name;
    }
    hello() {alert(this.name)}
}
let shogun = new Samurai("Dim");
console.log(shogun.__proto__ === Samurai.prototype);//true
console.log(shogun.__proto__.__proto__ === Object.prototype);//true
//console.log(shogun.__proto__.constructor.__proto__=== function.prototype);//true
console.log(shogun.__proto__.__proto__.__proto__ === null);//true