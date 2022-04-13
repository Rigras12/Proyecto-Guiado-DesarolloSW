import { series } from "./data.js";
console.log(series);
var seriesTable = document.getElementById("tbody1");
var divBody = document.getElementById("tabla1");
mostrarSeries(series);
mostrarPromedio(series);
function mostrarSeries(seriesx) {
    var _loop_1 = function (seriex) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td id=\"bold\">".concat(seriex.numero, "</td>\n        <td> <a href=\"").concat(seriex.paginaWeb, "\">").concat(seriex.nombre, "</a> </td>\n        <td> ").concat(seriex.canal, " </td>\n        <td> ").concat(seriex.seasons, " </td>");
        trElement.onclick = function () {
            var card = document.getElementById("card");
            card.innerHTML = "<img src=\"".concat(seriex.urlFoto, "\" alt=\"").concat(seriex.nombre, "\" width=\"100\" height =\"100\">\n            <div style=\"margin-left:4%\">\n            <p>").concat(seriex.nombre, "</p>\n            <p>").concat(seriex.descripcion, "</p>\n            <a href=\"").concat(seriex.paginaWeb, "\">").concat(seriex.paginaWeb, "</a>\n            </div>");
        };
        seriesTable.appendChild(trElement);
    };
    for (var _i = 0, seriesx_1 = seriesx; _i < seriesx_1.length; _i++) {
        var seriex = seriesx_1[_i];
        _loop_1(seriex);
    }
}
function mostrarPromedio(seriesx) {
    var seriesPromedio = document.createElement("p");
    var contador = 0;
    var index = 0;
    for (var _i = 0, seriesx_2 = seriesx; _i < seriesx_2.length; _i++) {
        var seriex = seriesx_2[_i];
        contador += seriex.seasons;
        index += 1;
    }
    var promedio = contador / index;
    seriesPromedio.innerHTML = "Seasons average : ".concat(promedio);
    divBody.appendChild(seriesPromedio);
}
