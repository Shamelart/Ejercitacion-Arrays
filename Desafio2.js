/* Desafío 2
Agregar tarea:
Para agregar la tarea debemos crear una función que realizara el trabajo,
recibira los parametros necesarios para la creacion de la tarea.
Agregara la tarea al final del array de tareas.
Al finalizar mostrar nuevamente el array de tareas

/* Extra:
•	Agregar un mensaje de éxito en el console.log al agregar una tarea en el desafio 2*/

const tareas = [
    {
        titulo: "Estudiar html",
        estado: "Terminado",
    },

    {
        titulo: "Estudiar css",
        estado: "Terminado",
    },

    {
        titulo: "Repasar Git",
        estado: "En Progreso",
    },

    {
        titulo: "Repasar GitHub",
        estado: "Pendiente",
    },

    {
        titulo: "Estudiar js",
        estado: "Pendiente",
    },

    {
        titulo: "Practicar js",
        estado: "En Progreso",
    },

    {
        titulo: "Estudiar React",
        estado: "Pendiente",
    }
]
const agregarTareas = (titulo, estado) => {
    const agregar = tareas.find(tareas => tareas.titulo.toLowerCase() == titulo.toLowerCase())
    if (agregar != undefined) {
        console.log("La tarea ya Existe...")
    } else {
        tareas.push({ titulo: titulo, estado: estado });
        console.log ("La tarea fue agragada exitosamente: titulo: " +  titulo + ", estado: " + estado)
        return tareas;
    }
}

// Está incluido el desafio 4 
console.log(agregarTareas("estudiar html", "Pendiente"));