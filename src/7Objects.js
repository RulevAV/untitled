//Литералы объектов – простые объекты, которые не представляются представителями какого-либо класса, а представляют из себя набор свойств и значений.
let firstName ='Bill',
    lastName = 'Gates',
    email ='sdf@mail.ru';

let person = {
    firstName : firstName,
    lastName : lastName,
    email : email,
    sayHello : function () {
        console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
    }
}
//или Упрощённый синтаксис при работе с простыми объектами
let person2 = {
    firstName,
    lastName,
    email,
    sayHello () {
        console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
    }
}

//Можно дать динамическое название свойства. В ES5 динамически создавать свойства можно только после создания объекта.
//В ES5
let proprty = 'ago';
person3 = {};
person3[proprty] = 123;
//В ES6
let person4 = {
    [proprty] : 12,
}
