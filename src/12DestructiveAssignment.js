//Деструктивное присваивание - упрощает извлечение данных из массивов и объектов, предлогая более короткий синтаксис.
let languages = ['JavaScript','php','Rython','Ruby'];
let js,pgp,py,rb,c;
[js,pgp,py,rb] = languages;//В левой части деструктивное выражение.
//или
[js,,py,rb] = languages;
//или
let [tr,...rest] = languages;
// или значение по умолчанию

[js=1,pgp=2,py=3,rb=4,c = 5] = languages;//В левой части деструктивное выражение.

//или

let numbers = [1,2,3,[4,5,6]];
let [l1,l2,l3,[l4,l5,l6]] = numbers;

function add([a1,a2]) {
    return a1+a2;
}
add([1,2]);

// быстро поменять значения переменных
let yes = 'Yes';
let no = 'No';
[yes,no] = [no,yes];
//Объекты

let person = {
    firstName :'john',
    lastName : 'Doe',
    social:{
        facebook:'johndoe',
        twitter:'jdoe'
    }
};

let {firstName,lastName} = person; //В левой части деструктивное выражение. названия переменных и свойств должны совпадать.
let {firstName: first,lastName : last} = person;// другие переменные.
//Далее аналогично  с массивами.
let {firstName: first2,lastName : last2, social:{facebook:fb,twitter:tw},age=5} = person;

