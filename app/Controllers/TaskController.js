import { ProxyState } from "../AppState.js";
import { taskService } from "../Services/TaskServices.js"

function _draw() {
    console.log("drawing");
    let template = ''
    ProxyState.lists.forEach(l => template += l.Template)
    document.getElementById("lists").innerHTML = template
    console.log(template)
}

export default class TaskController {
    constructor() {
        console.log("task controller")
    }

    createTask(listId) {
        window.event.preventDefault()
        console.log("creating task");
        let form = window.event.target

        let rawTask = {
            name: form.taskName.value,
            listId: listId
        }
        console.log(rawTask)
        taskService.createTask(rawTask)


        form.reset()
    }
    delete(taskId) {
        var choice = confirm("Press a damn button!");
        if (choice == true) {
            taskService.delete(taskId)
        }
    }
    checked(taskId) {
        let cvalue = document.getElementById(`${taskId}`).checked
        taskService.checked(taskId, cvalue)
        _draw()
    }
}