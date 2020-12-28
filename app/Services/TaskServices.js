import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js"

class TaskService {
    delete(taskId) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
    }
    createTask(rawTask) {
        let tasks = ProxyState.tasks
        tasks.push(new Task(rawTask))
        ProxyState.tasks = tasks
        console.log(ProxyState.tasks)
    }
    constructor() {
        console.log("task service")
        ProxyState.on("tasks", saveState)
    }
    // cvalue is the value we are passing from the controller to here :)
    checked(taskId, cvalue) {
        let task = ProxyState.tasks.find(t => t.id == taskId)
        let index = ProxyState.tasks.findIndex(t => t.id == taskId)
        if (cvalue == true) {
            task.isChecked = true
        }
        else { task.isChecked = false }
        ProxyState.tasks[index] = task
        saveState()
    }
}

export const taskService = new TaskService()