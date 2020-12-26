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
        console.log(ProxyState.Task)
    }
    constructor() {
        console.log("task service")
        ProxyState.on("tasks", saveState)
    }
}

export const taskService = new TaskService()