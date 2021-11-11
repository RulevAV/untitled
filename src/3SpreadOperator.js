//Оператор разворота
let staticLanguages = ["C","C++","java"];//статические языки.
let dynamicLanguages = ["JavaScript","PHP","Ruby"];//Динамический языки.


let  Languages = [...staticLanguages,"C#",...dynamicLanguages,"Python"];
//в es5
var Languages2 = [].concat(staticLanguages, ["C#"], dynamicLanguages, ["Python"]);

console.log(Languages);

function add(x,y,z) {
    console.log(x+y+z);
}

let nambers = [1,2,3,4];
add(...nambers); //6
