import { generateId } from "../Utils/GenerateId.js"

export default class Task {
    constructor({ name, listId, id }) {
        this.name = name
        this.color = color
        this.id = id || generateId(),
            this.listId = listId
    }

    get Template() {
        return /*html*/`
    <div class="col-6">
    <h5>
        <input type="checkbox" id="${this.id}">
       <i class="fa fa-trash text-danger cursor-pointer" onclick="app.taskController.delete('${this.id}')" aria-hidden="true"></i>
    </h5>
    </div>
    `
    }
}