//Наследование
//D.R.Y. - Don`t Raepit Yourself (Не повторяйся)
class Task {
    constructor(title) {
        this._title = title;
        this.done = false;
        Task.Count +=1;//statoc
        console.log('Создание задач');
    }
    get title(){
        return this._title;
    }
    set title(value){
        this._title = value;
    }
    static getDefaultTitle(){
        return 'Задача';
    }

    complete(){
        this.done = true;
        console.log(`Задача ${this._title} выполнена`);
    }
}
Task.Count = 0;
class SubTask extends Task{ //extends - расширять
 //если нет собственного конструктора то использовать родительский конструктор.(конструктор супер класса или родительского)
    constructor(title) {
        super(title);//вызвать конструтктор родительского класса
        this.parent = parent
        console.log('Создание под задачи');
    }
    complete(){//перезаписываем родительский метод
        super.complete();//D.R.Y.
        console.log(`Подзадача ${this.title} выполнена`);
    }
}

let task = new Task('Изучить JavaScript');
let subTask = new SubTask('Изучить ES6');

console.log(subTask instanceof SubTask); // true является представителем класса SubTask
console.log(subTask instanceof Task); // true
console.log(task instanceof SubTask); // false

task.complete();
subTask.complete();

console.log(SubTask.getDefaultTitle());
console.log(SubTask.Count);