var url = "https://alumnoscurso.azure-mobile.net/Tables/Clase18";

if (!sessionStorage.getItem("nombre"))
    location.replace("index.html");

//function procesarDatos(res) {
//    var tbody = $("table");
//    var n = "";
//    for (var i = 0; i < res.length; i++) {
//        n += "<tr>";
//        n += "<td>" + res[i].nombre + "</td>";
//        n += "<td>" + res[i].duracion + "</td>";
//        n += "<td><button type='button' class='borrar' onclick='conAjaxDel(\"" + res[i].id + "\")'>Borrar</button></td>";
//        n += "</tr>";
//    }
//    $("table").html(n);

//}

//function conGet() {

//    $.get(url, procesarDatos);

//}
function pintarInicio(res) {

    var canvas = document.getElementById("myCanvas");
    var contexto = canvas.getContext("2d");
    for (var i = 0; i < res.length; i++) {
        contexto.fillStyle = res[i].color;
        contexto.fillRect(res[i].x, res[i].y, res[i].w, res[i].h);
    }
}

function get() {
    $.get(url, pintarInicio);
}


function add(e) {

    e.preventDefault();
    var obj = {
        x: $("#x").val(),
        y: $("#y").val(),
        w: $("#w").val(),
        h: $("#h").val(),
        color: $("#color").val()
    }

    $.ajax({
        method: "post",
        url: url,
        success: pintar,
        error: function (err) {
            console.log(err);
            alert("Datos erroneos");
        },
        data: JSON.stringify(obj),
        dataType: "json",
        headers: {
            "Content-Type": "application/json"
        }

    });
}

function pintar(x,y,w,h) {

    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var w = document.getElementById("w").value;
    var h = document.getElementById("h").value;
    var color = document.getElementById("color").value;

    var canvas = document.getElementById("myCanvas");

    var contexto = canvas.getContext("2d");

    contexto.fillStyle = color;
    contexto.fillRect(x, y, w, h);
}








$(document).ready(function () {

    var nombre = sessionStorage.getItem("nombre");
    document.getElementsByTagName("p")[0].innerHTML = "Hola " + nombre;
    get();
    $("#enviar").click(add);
});