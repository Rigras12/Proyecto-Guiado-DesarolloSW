import { Aprendiz, NivelEducativo } from './aprendiz.js';
import {Curso} from './curso.js';

var cursos = [new Curso("Practicas esenciales para el agilismo",20,90,true,3019),
new Curso("Ingenieria de software para la web",15,99,true,2018),
new Curso("Pruebas automatizadas",25,50,false,2020),
new Curso("Principios de diseño y arquitectura",30,75,true,2020)]

export const ap = new Aprendiz("Juan Pablo", "Reyes", "avatar.png", 20, NivelEducativo.POSGRADO,cursos);
console.log(ap.cursos);

let aprendizTable :HTMLElement =document.getElementById("aprendiz")!;
let estadisticaTable:HTMLElement = document.getElementById("estadisticas")!;
let cursosTable: HTMLElement =document.getElementById("cursos")!;
let botonFiltro:HTMLElement=document.getElementById("boton-filtro")!;
let textoBusqueda:HTMLInputElement=<HTMLInputElement>document.getElementById("texto-busqueda")!;

botonFiltro.onclick=() => {
    let text:string = textoBusqueda.value;
    text= (text==null)?"":text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados: Curso[]=ap.cursos.filter(function(c){return c.nombre.match(text);})

    mostrarCursos(cursosFiltrados);
};

mostrarDatosAprendiz(ap);
mostrarestadisticas(ap);
mostrarCursos(cursos);

function mostrarDatosAprendiz(aprendiz:Aprendiz):void {
    let tboyAprendiz=document.createElement("tbody");
    tboyAprendiz.innerHTML=`<tr><td colspan=2> <img src="./${aprendiz.avarPath}" height =100></td> </tr>
    <tr><td>Nombres</td> <td>${aprendiz.nombres}</td></tr> 
    <tr><td>Apellidos</td> <td>${aprendiz.apellidos}</td></tr> 
    <tr><td>Edad</td> <td>${aprendiz.edad}</td></tr>
    <tr><td>Nivel educativo</td> <td>${aprendiz.nivelEducativo}</td></tr>`;

    aprendizTable.appendChild(tboyAprendiz);

}

function mostrarestadisticas(aprendiz:Aprendiz): void{
    let cantidadCertificados:number=aprendiz.darCursosCertificados();
    let trElement=document.createElement("tr");
    trElement.innerHTML=`<td><b>Numero de certificados</b></td><td>${cantidadCertificados}</td>`;
    estadisticaTable.appendChild(trElement);
}

function mostrarCursos(cursos:Curso[]):void{
    let cursosBody: HTMLElement = document.createElement("tbody");
    let estado:string[] =cursos.map(c =>(c.calificacion>60)?"green":"red");
    let index: number=0;

    for( let curso of cursos){
        let trElement:HTMLElement=document.createElement("tr");
        trElement.innerHTML=`<td>${curso.nombre}</td>
        <td>${curso.horas}</td>
        <td style="color:${estado[index]}">${curso.calificacion}</td>
        <td>${curso.certificado}</td>
        <td>${curso.anio}</td>`;
        index++;
        cursosBody.appendChild(trElement);
    }
    cursosTable.appendChild(cursosBody);

}
