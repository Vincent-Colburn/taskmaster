import { taskService } from "../Services/TaskServices.js"

export default class TaskController {
    constructor() {
        console.log("task controller")
    }

    creatTask(listId) {
        window.event.preventDefault()
        console.log("creating task");
        let form = window.event.target

        let rawTask = {
            title: form.taskTitle.value,
            listId: listId
        }
        toppingService.createTask(rawTask)

        form.reset()
    }
    delete(taskId) {
        console.log(taskId)
        taskService.delete(taskId)
    }
}