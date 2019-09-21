//clase 
var lapto = {
    //propiedades
    memoriaRam:'16gb',
    discoSolido:'Si',
    tamanioDisco:'2tb',
    pantalla:'Tactil',
    //metodo callback En programación de computadoras, una devolución de llamada o retrollamada (en inglés: callback) es una función "A" que se usa como argumento de otra función "B". Cuando se llama a "B", ésta ejecuta "A". Para conseguirlo, usualmente lo que se pasa a "B" es el puntero a "A".
    cambiarTamanio: function(tamanio){
        this.tamanioDisco = tamanio;
        console.log(lapto);
    }
}
lapto.cambiarTamanio('250gb');
console.log(lapto);
