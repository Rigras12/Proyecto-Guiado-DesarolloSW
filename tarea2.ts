//Tarea 2

let op1:number=10;
let op2: number=15;

console.log(`Mis variables iniciales son : ${op1} y ${op2}`);
op1++;
op2+=4;

console.log(`Mis variables iniciales son : ${op1} y ${op2}`);

let resultado: number = op1/op2;
console.log(`Resultado : ${resultado}`);
console.log(`Resultado : ${resultado.toPrecision(2)}`);



let varTipoDesconocido: any;
console.log(`varibale tiene valor : ${varTipoDesconocido} y es te tipo ${typeof(varTipoDesconocido)}`);

varTipoDesconocido=" Ahora hay un texto";
console.log(`varibale tiene valor : ${varTipoDesconocido} y es te tipo ${typeof(varTipoDesconocido)}`);

varTipoDesconocido=2.8;
console.log(`varibale tiene valor : ${varTipoDesconocido} y es te tipo ${typeof(varTipoDesconocido)}`);

let varTipoIndefinido : undefined;

let varVoid:void=undefined;
console.log(`variable tiene valor: ${varVoid} y es de tipo ${typeof(varVoid)}`);

function imprimirMensaje(): void{
    console.log("Mensaje gen'erico");
}

function imprimirMensaje2(msj:string):void {
    console.log(msj);
}

imprimirMensaje();
imprimirMensaje2("Mensaje parametro");

function sumar(op1:number,op2:number): number{
    return op1+op2;
}

var fSumar=sumar;

console.log(sumar(10,15));
console.log(fSumar(25,10));


