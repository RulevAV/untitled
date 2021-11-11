// Обещания
// Очень часто мы хотим сделать чтобы что-то произошло после того как произойдёт что-то другое.
// Традиционно используются функции обратного вызова (Callback).
// Если всё время использовать функции обратного вызова, то код может превратиться в callback hell.
// Обещание выполняется или не выполняется только один раз. его нельзя поменять.
// Если обещания не поддерживается, то можно установить Babel-polyfill
function applyFromVisa(documents) {
    console.log('Обработка заявления');
    let promis = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random()>.5? resolve({}) : reject('В визе отказанно: нехватка документов');
        },2000);
    });
    return promis;
}
function resolveVisa (visa){
    console.log('Виза получена');
    return new Promise((resolve, reject)=> {
        setTimeout(()=> resolve(visa),2000);
    });
}
function resolveBookHotel (visa){
    console.log('Бронируем билет');
    console.log(visa);
    return Promise.resolve(visa);//Можно моментально выполнить(отклонить) обещание.
    /*return new Promise((resolve, reject) => {
        resolve(visa);
    });*/
}
function resolveBuyTickets (booking){
    console.log('Покупаем билет');
    console.log('Бронь',booking);
    return new Promise((resolve, reject) => {
        resolve(booking);
    });
}



function rejectVisa (reject){
    console.log(reject);
}
applyFromVisa().then(resolveVisa).then(resolveBookHotel).then(resolveBuyTickets).catch(rejectVisa);

//Работа с несколькими обещаниями
function go(num) {
    return new Promise(function (resolve, reject) {
        let delay = Math.ceil(Math.random()*3000);
        console.log(num, delay);
        setTimeout(()=> {
            if (delay>2000){
                reject(num)
            }else {
                resolve(num)
            }
            resolve(num)
        },delay);
    });
}
let p1 = go(1);
let p2 = go(2);
let p3 = go(3);

Promise.all([p2,p1,p3]).then(value => {//дожидается выполнения всех обещаний, даже если в какомто произошла ошибка.
    console.log(value)}).catch(error=>console.error(error));//log 2,1,3 или текст ошибки

Promise.race([p2,p1,p3]).then(value =>{//гонка. Важен результат самого первого который выполнится.(порядо отправленных промисов неважен)
    console.log(value)}).catch(error=>console.error(error));//log 2,1,3 или текст ошибки

