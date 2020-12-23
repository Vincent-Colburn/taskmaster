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
                    <h4 class="card-title">${this.title} <button class="text-warning btn btn-danger" onclick="app.listController.deleteList('${this.id}')"><i class="fa fa-trash text-danger" aria-hidden="true"></i></button> </h4>

                    <form onsubmit="app.taskController.createTask('${this.id}')" >
                    <div class="form-group">
                        <label for="">Task Title</label>
                        <input type="text" class="form-control" name="taskTitle" id="taskTitle" aria-describedby="helpId"
                            placeholder="List title">
                        <button class="btn btn-success" type="submit">+</button>
                    </div>
                </form>


                    <p class="card-text">Tasks: </p>
                    <div class="row">
                    ${this.Tasks}
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