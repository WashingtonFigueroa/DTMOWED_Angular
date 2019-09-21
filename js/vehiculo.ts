//Interface
interface vehiculoBase {
    setColor(color);
    getColor();
}
// clase (molde del objeto)
class Vehiculo implements vehiculoBase {
    //propiedades - caracteristicas del objeto
    private modelo: string;
    private anio: number;
    private kilometraje: number;
    private color: string;
    private freno: string;
    //metodos - funciiones o acciones del objeto
    constructor (modelo, anio, kilometraje, color, freno){
        this.modelo = modelo,
        this.anio = anio,
        this.kilometraje = kilometraje,
        this.color = color,
        this.freno = freno
    }
    public setColor (color){
        this.color = color;
    }
    public getColor (){
        return this.color;
    }
}
//Clase Hija
class Moto extends Vehiculo {
    private combustible: string;
    public setCombustible(tipo){
        this.combustible = tipo;
    }
    public getCombustible(){
        return this.combustible;
    }
}
var moto = new Moto('Gran Vitara', 2018, 180, 'Azul', 'disco');
moto.setCombustible('Gasolina');
moto.setColor('Negro');
console.log(moto);

