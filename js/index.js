const pacienteUI = document.querySelector("#paciente");
const identificacionUI = document.querySelector("#identificacion");
const servicioUI = document.querySelector("#servicio");
const enviarBTN = document.querySelector("#btn");
const mostrar = document.querySelector(".mostrar");
const formulario = document.querySelector("#formulario");

enviarBTN.addEventListener("click", agregar);
document.addEventListener("DOMContentLoaded", pintar);

function agregar(event) {
    event.preventDefault();
    const objeto = {
        paciente: pacienteUI.value,
        identificacion: identificacionUI.value,
        servicio: servicioUI.value
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
        <h3>${dato.paciente}</h3>
        <h3>${dato.identificacion}</h3>
        <h3>${dato.servicio}</h3>
        <button class="botones" onClick="editar(${index})">editar</button>
        <button class="botones" onClick="borrar(${index})">borrar</button>
        </div>
        `;
        })
        .join("");
}

 
function editar(index){
const pacienteEdit = prompt("edita el paciente", datos[index].paciente)
datos[index].paciente =pacienteEdit;
const identificacionEdit = prompt("edita el telefono", datos[index].identificacion)
datos[index].identificacion =identificacionEdit;
const servicioEdit = prompt("edita el precio", datos[index].servicio)
datos[index].servicio =servicioEdit;

localStorage.setItem("valores",JSON.stringify(datos))
pintar()
}

function borrar(index){
    datos.splice(index,1);
    localStorage.setItem("valores",JSON.stringify(datos))
    pintar()
}