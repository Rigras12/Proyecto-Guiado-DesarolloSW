import { Aprendiz, NivelEducativo } from './aprendiz.js';

export const ap = new Aprendiz("Juan Pablo", "Reyes", "avatar.png", 20, NivelEducativo.POSGRADO);

let aprendizTable :HTMLElement =document.getElementById("aprendiz")!;

mostrarDatosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz:Aprendiz):void {
    let tboyAprendiz=document.createElement("tbody");
    tboyAprendiz.innerHTML=`<tr><td colspan=2> <img src="./${aprendiz.avarPath}" height =100></td> </tr>
    <tr><td>Nombres</td> <td>${aprendiz.nombres}</td></tr> 
    <tr><td>Apellidos</td> <td>${aprendiz.apellidos}</td></tr> 
    <tr><td>Edad</td> <td>${aprendiz.edad}</td></tr>
    <tr><td>Nivel educativo</td> <td>${aprendiz.nivelEducativo}</td></tr>`;

    aprendizTable.appendChild(tboyAprendiz);

}

