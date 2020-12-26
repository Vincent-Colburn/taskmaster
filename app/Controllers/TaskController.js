import { taskService } from "../Services/TaskServices.js"

export default class TaskController {
    constructor() {
        console.log("task controller")
    }

    creatTask(listId) {
        debugger
        window.event.preventDefault()
        console.log("creating task");
        let form = window.event.target

        let rawTask = {
            title: form.taskName.value,
            listId: listId
        }
        console.log(rawList)
        taskService.createTask(rawTask)

        form.reset()
    }
    delete(taskId) {
        console.log(taskId)
        taskService.delete(taskId)
    }
}