/* Desafio 3
Listar tareas
Crear una funcion que mostrara las tareas solo del parametro dado.
Ejemplo:
mostrarTareas(“en progreso”) //Debera solo mostrar el array de objetos con tareas en progreso
Si la palabra ingresada en el parametro no coincide con ninguno de los 3 estados debera mostrar
todas las tareas sin importar su estado. Ejemplo mostrarTareas(“dujshadhasik”)
Comprobar el correcto funcionamiento con console.log 

Extra:
•	Mejorar la aplicación para casos sensitivos, por ejemplo, si en el desafio 3 se
    ingresa (“en progreso”), en vez de (“En progreso”), la aplicación igualmente
    funcione correctamente*/

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
    
    function listarTareas(estado) {
        let estadoMinuscula = String(estado).toLocaleLowerCase();    
        if (estadoMinuscula == "en progreso" || estadoMinuscula == "pendiente" || estadoMinuscula == "terminado") {
            const listadoTareas = tareas.filter(tareas => tareas.estado.toLowerCase() == estadoMinuscula);
            return listadoTareas;
    
        } else {
            return tareas;
        }
    }
    console.log(listarTareas("En pRogreso"));