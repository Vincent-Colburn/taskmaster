import { generateId } from "../Utils/GenerateId.js"

export default class Task {
    constructor({ name, listId, id, isChecked }) {
        this.name = name
        // this.color = color
        this.id = id || generateId()
        this.listId = listId
        this.isChecked = isChecked || false
    }

    get Template() {
        return /*html*/`
    <div>
    <h5>
        <input type="checkbox" id="${this.id}" onclick="app.taskController.checked('${this.id}')" ${this.isChecked ? "checked" : ""}><label for="{this.id}">${this.name}</label>
       <i class="fa fa-trash text-danger cursor-pointer" onclick="app.taskController.delete('${this.id}')" aria-hidden="true"></i><br/>
    </h5>
    </div>
    `
    }
}