class pizza{
    constructor(id, nombre, ingredientes, precio){
        this.id=id;
        this.nombre=nombre, 
        this.ingredientes=ingredientes;
        this.precio=precio;
    }
}

let pizza1= new pizza(1, "Muzzarela", ["salsa", "muzzarela", "aceitunas"], 550);
let pizza2= new pizza(2, "Napolitana", ["salsa", "muzzarela", "aceitunas", "tomate"], 700);
let pizza3= new pizza(3, "Calabresa", ["salsa", "muzzarela", "aceitunas", "salame"], 750);
let pizza4= new pizza(4, "Roquefort", ["salsa", "muzzarela", "aceitunas", "roquefort"], 800);
let pizza5= new pizza(5, "Fugazeta", ["salsa", "muzzarela", "aceitunas", "cebolla"], 500);
let pizza6= new pizza(6, "Especial", ["salsa", "muzzarela", "aceitunas", "jamon", "morron"], 750);

const arrayPizzas = [];
arrayPizzas.push(pizza1, pizza2, pizza3, pizza4, pizza5, pizza6);
console.log("Las pizzas con id impar son:");
for (let index = 0; index < arrayPizzas.length; index++) {
    if (arrayPizzas[index].id%2!==0) {
        console.log(arrayPizzas[index].nombre);
    }
}
console.log("");
for (let index = 0; index < arrayPizzas.length; index++) {
    if (arrayPizzas[index].precio<600) {
        console.log("esta pizza vale menos de $600");
        console.log(arrayPizzas[index].nombre);
    }
}
console.log("");
console.log("A continuacion se muestra una lista de nuestras pizzas con sus respectivos precios");
for (let index = 0; index < arrayPizzas.length; index++) {
    console.log(arrayPizzas[index].nombre,arrayPizzas[index].precio );
}
console.log("");
console.log("A continuacion se muestra una lista de los ingredientes de todas nuestras pizzas");
for (let index = 0; index < arrayPizzas.length; index++) {
    console.log("Los ingredientes de la pizza ", arrayPizzas[index].nombre, " son:");
    for (let index2 = 0; index2 < arrayPizzas[index].ingredientes.length; index2++) {
        console.log(arrayPizzas[index].ingredientes[index2]);
    }
    console.log("");
}