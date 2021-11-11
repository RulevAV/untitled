//ООП и наследование на прототипах объектов. (если создавать классы таким образом то хостинг работает)
//Засаряет глобальное пространство имен window.Task === Task ->true
function Task(title) { //Функция конструктор (отличие от простых функций в new)
    this._title = title;
    this._done = false;
    Task.Count+=1;
}
Object.defineProperty(Task,'title',{
   get: function () {
        return this._title;
   },
    set: function (value) {
        this._title = value;
    }
});

Task.prototype.complete = function(){//метод класса (экономия памяти из за ссылки). Если указать метод в конструкторе то все объекты будут иметь отдельный метод.
    this._done = true;
};

Task.getDefaultTitle = function () {//Статический метод
    return 'Задача';
};

Task.count = 0;//Статическое свойство

function SubTask(title, parent) {//Под класс
    Task.call(this,title);//конструктор родительского класса
    this._parent = parent;//
}
//для правильного определения наследования нужно использовать прототип
SubTask.prototype = Object.create(Task.prototype);//Прототипом класса SubTask является прототип класса Task
SubTask.prototype.constructor = SubTask;//у прототипа SubTask конструктором является функция SubTask

var task = new Task('Изучить JavaScript');
var subTask = new SubTask('Изучить ES5',task);

console.log(task);
console.log(subTask);

