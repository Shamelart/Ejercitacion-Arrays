/* Extra:
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

console.log(tareas);

    tareas.sort((obj1, obj2) => {
        if (obj1.estado < obj2.estado) {
            return -1;
        } else if (obj1.estado > obj2.estado) {
            return 1;
        } else {
            return 0;
        }

    });

console.log(tareas);