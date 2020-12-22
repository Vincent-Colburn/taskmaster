import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import { saveState } from "../Utils/LocalStorage.js"

class ListService {
    deleteList(id) {
        ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
        ProxyState.tasks = ProxyState.tasks.filter(t => t.taskId != id)
    }
    createList(rawList) {
        let list = new List(rawList)

        let lists = ProxyState.lists
        lists.push(list)

        ProxyState.lists = lists
        console.log(ProxyState.lists)
    }
    constructor() {
        console.log("list constructor")
        ProxyState.on("lists", saveState)
    }
}

export const listService = new ListService()