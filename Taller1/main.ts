import {Serie} from "./serie.js";
import {series}from "./data.js";
console.log(series)
let seriesTable : HTMLElement =document.getElementById("tbody1")!;
let divBody:HTMLElement=document.getElementById("tabla1")!;

mostrarSeries(series);
mostrarPromedio(series);


function mostrarSeries(seriesx: Serie[]){
  
    for(let seriex of seriesx ){
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML=`<td id="bold">${seriex.numero}</td>
        <td> <a href="${seriex.paginaWeb}">${seriex.nombre}</a> </td>
        <td> ${seriex.canal} </td>
        <td> ${seriex.seasons} </td>`
        trElement.onclick=()=>{
            let card : HTMLElement=document.getElementById("card")!;
            card.innerHTML=`<img src="${seriex.urlFoto}" alt="${seriex.nombre}" width="100" height ="100">
            <div style="margin-left:4%">
            <p>${seriex.nombre}</p>
            <p>${seriex.descripcion}</p>
            <a href="${seriex.paginaWeb}">${seriex.paginaWeb}</a>
            </div>`
        };
        seriesTable.appendChild(trElement);

    }
 
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


