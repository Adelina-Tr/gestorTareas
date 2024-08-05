//Obtener la lista de tareas del almacenamiento del navegador "LocalStorage"
let tasks = JSON.parse (localStorage.getItem('tasks'))||[];

//Funcion para agreagar una tarea a la lista de tareas
export const addTsk = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    }

}