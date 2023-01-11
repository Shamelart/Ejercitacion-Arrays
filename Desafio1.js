/* Desafío 1
El tech leader de nuestro equipo de desarrollo propone programar una app de tareas.
Para esto nos encarga:
Crear una variable llamado tareas y dentro de ella guardar un array de objetos literales.
Cada objeto literal deberá tener las propiedades: titulo y estado. En donde el título
podrá ser cualquier cadena de texto, sin embargo el estado sólo podrá tomar los siguientes
valores: “terminada”, “en progreso” o “pendiente”. 

1. Generar un archivo app.js que tenga el array de tareas.
2. Mostrar el listado de tareas existente por la terminal.*/

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
