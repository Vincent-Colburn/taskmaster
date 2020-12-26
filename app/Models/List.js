import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
    constructor({ title, color, id }) {
        this.id = id || generateId()
        this.title = title
        this.color = color
    }

    get Template() {
        return /*html*/`
          <div class="card col-4">
                <div class="card-body">
                <div class="card-header" style="background-color:${this.color}"><h4> ${this.title} <button class="text-warning btn btn-danger" onclick="app.listController.deleteList('${this.id}')"><i class="fa fa-trash text-danger text-right" aria-hidden="true"></i></button> </h4> </div>
                    <p class="card-text">Tasks: </p>
                    <div class="row">
                    ${this.Tasks}
                    <form onsubmit="app.taskController.createTask('${this.id}')" >
                    <div class="form-group">
                        <input type="text" class="form-control" name="taskName" id="taskName" aria-describedby="helpId"
                            placeholder="New Task...">
                        <
                    </div>
                </form>
                    </div>
                </div>
            </div>

    `

    }
    get Tasks() {
        let template = ""
        let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
        tasks.forEach(t => template += t.Template)
        return template
    }
}