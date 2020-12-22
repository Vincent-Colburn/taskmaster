import { ProxyState } from "../AppState.js"
import { listService } from "../Services/ListServices.js"

function _draw() {
    console.log("drawing");
    let l = ProxyState.lists
    let template = ''
    ProxyState.tasks.forEach(l => template += l.Template)
    document.getElementById("lists").innerHTML = template
}

export default class ListController {
    constructor() {
        console.log("start list controller")
        ProxyState.on("lists", _draw)
        ProxyState.on("tasks", _draw)
        _draw()
    }

    createList() {
        debugger
        window.event.preventDefault()
        console.log("creating list");
        let form = window.event.target
        //access the target or form variable to pull values off of the form ids/names then access value.
        // @ts-ignore
        console.log(form.title.value)
        // @ts-ignore
        let rawList = {
            // @ts-ignore
            title: form.title.value
        }
        console.log(rawList)
        listService.createList(rawList)
        // @ts-ignore
        form.reset()
        // document.getElementById("lists")
    }

    deleteList(id) {
        console.log("deleting list", id);
        listService.deleteList(id)
    }
}