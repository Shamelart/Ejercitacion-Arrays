/* Desafio 5
Existe tarea?

Crear una funcion que devolvera las tareas en donde el
titulo coincida con el parametro dado.
Ejemplo: existeTarea(“js”) // Devera devolver el array
con los objetos que coincidan con el string sin importar
su estado */

/* Extra:
•	Agregar un mensaje de éxito en el console.log al agregar una tarea en el desafio 2
•	Mejorar la aplicación para casos sensitivos, por ejemplo, si en el desafio 3 se
    ingresa (“en progreso”), en vez de (“En progreso”), la aplicación igualmente
    funcione correctamente
•	Mejorar otros desafios con casos sensitivos como el anterior
•	Crear una funcion que devolvera todas las tareas ordenadas según su estado.
Primero apareceran las que estan pendientes, luego en progreso y al final las terminadas
 */

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

const filtrarTarea = (texto) => {
    if (texto != "") {
        filtrar = tareas.filter(tarea => tarea.titulo.toLowerCase().includes(texto.toLowerCase()));
        if (filtrar.length > 0) {
            return filtrar;
        }
        else {
            return "No Existe..."
        }
    } else {
        return "No Existe...";
    }
}

console.log(filtrarTarea("r")); 