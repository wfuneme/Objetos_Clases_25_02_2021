const Animal = new Object({
    datos_animal() {
        return `Nombre del animal: ${this.getnombre}, Especie del animal: ${this.getespecie}, color del animal: ${this.getcolor}, Raza del animal: ${this.getraza}`;
    }
});
const objeto_animal = Animal.__proto__;
objeto_animal.constructor ={ nombre: "Pancho", especie: "Perrillo", color:"Negro", raza: "Pitbull"};
Animal.__defineSetter__('setnombre', 
    function(p1) {
        objeto_animal.constructor.nombre = p1;
    }
)
Animal.__defineSetter__('setraza', 
    function(p2) {
        objeto_animal.constructor.raza =p2;
    }
)
Animal.__defineSetter__('setespecie', 
    function(p3) {
        objeto_animal.constructor.especie = p3;
    }
)
Animal.__defineSetter__('setcolor', 
    function(p4) {
        objeto_animal.constructor.color =p4;
    }
)
Animal.__defineGetter__('getnombre',
    function() {
        return objeto_animal.constructor.nombre;
    }
)
Animal.__defineGetter__('getraza',
    function() {
        return objeto_animal.constructor.raza;
    }
)
Animal.__defineGetter__('getespecie',
    function() {
        return objeto_animal.constructor.especie;
    }
)
Animal.__defineGetter__('getcolor',
    function() {
        return objeto_animal.constructor.color;
    }
)

console.log(`Willmer Obed Funeme SanMartin - Git de clase objetos`);
console.log(`Datos originales del animal: \n ${Animal.datos_animal()}`);

Animal.setnombre = "Rocky";
Animal.setespecie = "Perrazo";
Animal.setcolor = "Caoba";
Animal.setraza = "Salchicha";

console.log(`Datos posteriores del animal: \n ${Animal.datos_animal()}`);