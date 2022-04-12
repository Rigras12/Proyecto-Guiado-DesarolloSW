import {Serie} from "./serie.js";
import {series}from "./data.js";
console.log(series)
let seriesTable : HTMLElement =document.getElementById("series")!;
let divBody:HTMLElement=document.getElementById("tabla")!;

mostrarSeries(series);
mostrarPromedio(series);


function mostrarSeries(seriesx: Serie[]){
    let seriesBody : HTMLElement =document.createElement("tbody");
    for(let seriex of seriesx ){
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML=`<td id="bold">${seriex.numero}</td>
        <td> <a href="${seriex.paginaWeb}">${seriex.nombre}</a> </td>
        <td> ${seriex.canal} </td>
        <td> ${seriex.seasons} </td>`
        seriesBody.appendChild(trElement);

    }
    seriesTable.appendChild(seriesBody)
}

function mostrarPromedio(seriesx:Serie[]){
    let seriesPromedio : HTMLElement =document.createElement("p");
    let contador : number =0;
    let index:number=0;
    for(let seriex of seriesx){
        contador+=seriex.seasons;
        index+=1;

    }
    let promedio=contador/index;
    seriesPromedio.innerHTML=`Seasons average : ${promedio}`
    divBody.appendChild(seriesPromedio);
}

