if (sessionStorage.getItem("nombre")) {
    location.replace("clase.html");
}

function login() {
    if (document.getElementById("nombre").value == "") {
        alert("Nombre vacio");
        return;
    }
    sessionStorage.setItem("nombre", document.getElementById("nombre").value);
    location.replace("clase.html");
}

document.getElementById("enviar").onclick = login;