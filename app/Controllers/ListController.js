import { ProxyState } from "../AppState.js"
import { listService } from "../Services/ListServices.js"

function _draw() {
    console.log("drawing");
    let template = ''
    ProxyState.lists.forEach(l => template += l.Template)
    document.getElementById("lists").innerHTML = template
    console.log(template)
}

export default class ListController {
    constructor() {
        console.log("start list controller")
        ProxyState.on("lists", _draw)
        ProxyState.on("tasks", _draw)
        _draw()
    }

    createList() {
        window.event.preventDefault()
        console.log("creating list");
        let form = window.event.target
        //access the target or form variable to pull values off of the form ids/names then access value.
        // @ts-ignore
        // console.log(form.listname.value)
        // @ts-ignore
        let rawList = {
            // @ts-ignore
            title: form.listname.value,
            color: form.listcolor.value,

        }
        console.log(rawList)
        listService.createList(rawList)
        // @ts-ignore
        form.reset()
        // document.getElementById("lists")
    }

    deleteList(id) {
        var choice = confirm("Press a damn button!");
        if (choice == true) {
            listService.deleteList(id)
        }
        console.log("deleting list", id);

    }
}