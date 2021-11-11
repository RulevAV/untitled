// В ES6 было официально добавлено такое понятие как итерируемый или перебираемый объект.
// Iterable- это объект содержание которого можно перебрать по одному объекту.
// Это понятие было, но оно не было стандартизировано.
// Чем отличается итерируемый объект от не итерируемого?
// У итерируемого объекта есть специальный метод, который возвращает объект.
// Для доступа к этому методу нужно использовать спец сивол [Symbol.iterator]()-этот метод возвращает итератор.
// У итератора есть метод next () который возвращает объект (IteratorResult).
// IteratorResult – есть два свойства done-это последний элемент bool, value;
// Для перебора итерируемых объектов в ES6 был добавлен новый цикл for of. Так же он используется в операторе разворота.

let xmen = ['Cyclops','Wolverine','Rogue'];
let Iterator = xmen[Symbol.iterator]();//ArrayIterator
console.log(Iterator.next());//done = false значит что массив еще не получен.

let idGenerator = {
    generate(){
        return this[Symbol.iterator]();
    },
    [Symbol.iterator](){
        let id=1;
        return {
            next(){
                let value = id>100?undefined:id++;
                let done = !value;//проверка наличия значения в переменной value
                return {value,done};
            }
        }
    }
}
for (let id of idGenerator)
{
    console.log(id);
}
let random = idGenerator.generate();
console.log(random);


class ArrayIterator {
    constructor(array) {
        this.array = array.map(item =>item).sort();//метод sort сартирует массив на месте, а map вернет новый массив. тем самым мы не тронем исходный массив.
        this.index = 0;
    }
    next() {
        let result = {value:undefined,done : true};

        if (this.index <this.array.length){
            result.value = this.array[this.index];
            result.done = false;
            this.index +=1;
        }
        return result;
    }
}

class TaskList{
    constructor() {
        this.tasks = [];
    }
    addTasks(...tasks){
        this.tasks =this.tasks.concat(tasks);
    }
    [Symbol.iterator](){
        return new ArrayIterator(this.tasks );
    }
}

let tasklist = new TaskList();
tasklist.addTasks("1","2","3","4","5","6");

for(let task of tasklist)
{
    console.log(task);
}
// Клиенту достается специальный объект с помощью, которого он может получить элементы по одному.
// Клиенту не нужно беспокоиться как нужно итерировать объект.
