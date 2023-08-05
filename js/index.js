const nombreUI = document.querySelector("#nombre");
const telefonoUI = document.querySelector("#telefono");
const precioUI = document.querySelector("#precio");
const enviarBTN = document.querySelector("#btn");
const mostrar = document.querySelector(".mostrar");
const formulario = document.querySelector("#formulario");

enviarBTN.addEventListener("click", agregar);
document.addEventListener("DOMContentLoaded", pintar);

function agregar(event) {
    event.preventDefault();
    const objeto = {
        nombre: nombreUI.value,
        telefono: telefonoUI.value,
        precio: precioUI.value
    }

    datos = JSON.parse(localStorage.getItem("valores"));
    if (datos == null){
        datos = []
    }

    datos.push(objeto);
    localStorage.setItem("valores", JSON.stringify(datos));

    formulario.reset();
    pintar()
}

 
function pintar(){
    datos = JSON.parse(localStorage.getItem("valores"));
    mostrar.innerHTML = datos
    .map((dato, index) => {
        return `
        <div class="card">
        <h3>${dato.nombre}</h3>
        <h3>${dato.telefono}</h3>
        <h3>${dato.precio}</h3>
        <button class="botones" onClick="editar(${index})">editar</button>
        <button class="botones" onClick="borrar(${index})">borrar</button>
        </div>
        `;
        })
        .join("");
}

 
function editar(index){
const nombreEdit = prompt("edita el nombre", datos[index].nombre)
datos[index].nombre =nombreEdit;
const telefonoEdit = prompt("edita el telefono", datos[index].telefono)
datos[index].telefono =telefonoEdit;
const precioEdit = prompt("edita el precio", datos[index].precio)
datos[index].precio =precioEdit;

localStorage.setItem("valores",JSON.stringify(datos))
pintar()
}

function borrar(index){
    datos.splice(index,1);
    localStorage.setItem("valores",JSON.stringify(datos))
    pintar()
}