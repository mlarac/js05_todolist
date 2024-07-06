

const tareas = [

    {
        id:1719789697085,
        nombre: "cocinar",   
        completada: false, 
    },
    {
        id:1719789735779,
        nombre: "descansar",
        completada: false,      
    },
    {
        id:1719789750718,
        nombre: "completar desafio", 
        completada: false,     
    },
];
document.querySelector("#itemForm").addEventListener("submit", agregarTarea);
const listaDeTareas = document.querySelector("#listaDeTareas");
const tareasInput = document.querySelector("#nuevaTarea");
const nuevaTarea = tareasInput.value.trim();
const completadas = document.querySelector('#completadas')
const pendientes = document.querySelector('#pendientes')
const totalTareas = document.querySelector('#totalTareas')
mostrarTareas();
function agregarTarea(event) {
    event.preventDefault();
    

    if (nuevaTarea !== "") {
        tareas.push({id: Date.now(), nombre: nuevaTarea, completada:false});
        tareasInput.value = "";
        mostrarTareas();
    }
}

function borrarTarea(id){
    const index = tareas.findIndex(tarea => tarea.id === id);
    tareas.splice(index,1);
    mostrarTareas();
    }

    function completarTarea(id) {
        const tarea = tareas.find(tarea => tarea.id === id)
        if(tarea) { 
            tarea.completada = true;
            mostrarTareas()
    }}

    function mostrarTareas(){
        /* Actualizamos la información en el HTML */
        let html = "";
        let lista = 0;
        let pendiente = 0;
        
        for (let tarea of tareas) {
            let nombreTarea = tarea.completada ? `<s>${tarea.nombre}</s>` : tarea.nombre;
            html += `<li class="list-group-item">${nombreTarea} 
            <button onclick="completarTarea(${tarea.id})" class='badge badge-success'>Completar</button>
            <button onclick="borrarTarea(${tarea.id})" id='eliminar' class='badge badge-danger'>Eliminar</button></li>`;
            
            tarea.completada ? lista++ : pendiente++;
        }
        
        listaDeTareas.innerHTML = html;
        totalTareas.innerHTML = tareas.length;
        completadas.innerHTML = lista;
        pendientes.innerHTML = pendiente; 
    }