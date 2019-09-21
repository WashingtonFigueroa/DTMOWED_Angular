var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// clase (molde del objeto)
var Vehiculo = /** @class */ (function () {
    //metodos - funciiones o acciones del objeto
    function Vehiculo(modelo, anio, kilometraje, color, freno) {
        this.modelo = modelo,
            this.anio = anio,
            this.kilometraje = kilometraje,
            this.color = color,
            this.freno = freno;
    }
    Vehiculo.prototype.setColor = function (color) {
        this.color = color;
    };
    Vehiculo.prototype.getColor = function () {
        return this.color;
    };
    return Vehiculo;
}());
//Clase Hija
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Moto.prototype.setCombustible = function (tipo) {
        this.combustible = tipo;
    };
    Moto.prototype.getCombustible = function () {
        return this.combustible;
    };
    return Moto;
}(Vehiculo));
var moto = new Moto('Gran Vitara', 2018, 180, 'Azul', 'disco');
moto.setCombustible('Gasolina');
moto.setColor('Negro');
console.log(moto);
