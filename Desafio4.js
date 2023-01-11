/* Desafio 4
Agregar Verificacion
Modificar la funcion del desafio 2, ya que si el titulo
de la tarea que se desea ingresar ya existe en el array,
debera devolvernos un mensaje de error, avisandonos que ya existe esa tarea.
En el caso de no existir, agregarlo normalmente */

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

const agregarVerificacion = (titulo, estado) => {
    const verificacion = tareas.find(tareas => tareas.titulo.toLowerCase() == titulo.toLowerCase())
    if (verificacion != undefined) {
        console.log("La tarea ya Existe...")
    } else {
        tareas.push({ titulo: titulo, estado: estado });
        return tareas;
    }
}

console.log(agregarVerificacion("estudiar React", "Pendiente"));