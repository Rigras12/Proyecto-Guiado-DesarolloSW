//Tarea 2
var op1 = 10;
var op2 = 15;
console.log("Mis variables iniciales son : ".concat(op1, " y ").concat(op2));
op1++;
op2 += 4;
console.log("Mis variables iniciales son : ".concat(op1, " y ").concat(op2));
var resultado = op1 / op2;
console.log("Resultado : ".concat(resultado));
console.log("Resultado : ".concat(resultado.toPrecision(2)));
var varTipoDesconocido;
console.log("varibale tiene valor : ".concat(varTipoDesconocido, " y es te tipo ").concat(typeof (varTipoDesconocido)));
varTipoDesconocido = " Ahora hay un texto";
console.log("varibale tiene valor : ".concat(varTipoDesconocido, " y es te tipo ").concat(typeof (varTipoDesconocido)));
varTipoDesconocido = 2.8;
console.log("varibale tiene valor : ".concat(varTipoDesconocido, " y es te tipo ").concat(typeof (varTipoDesconocido)));
var varTipoIndefinido;
varTipoIndefinido = null;
var varVoid = undefined;
console.log("variable tiene valor: ".concat(varVoid, " y es de tipo ").concat(typeof (varVoid)));
function imprimirMensaje() {
    console.log("Mensaje gen'erico");
}
function imprimirMensaje2(msj) {
    console.log(msj);
}
imprimirMensaje();
imprimirMensaje2("Mensaje parametro");
function sumar(op1, op2) {
    return op1 + op2;
}
var fSumar = sumar;
console.log(sumar(10, 15));
console.log(fSumar(25, 10));
