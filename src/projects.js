import {toDoItem} from "./toDo.js"
import {compareDesc} from "date-fns"


// -create a project class as a separate module
// Project class should have the following parameters
// this.name
// this.toDos  = which is an empty array of toDo objects
// And the following methods
// addToDo(toDo Object){
// Append toDo object to project.toDos array using the array push method
// }
// findIndexoftoDo(toDo object){
// Return index of toDo in projects.toDos array using toDo.uuid using findIndex() array method
// }
// deleteToDo(toDo) {
// Delete toDo object from project.toDos array using project.findIndexoftoDo(toDo Object) as an argument to the array splice() method.
// }
// sortToDos(projects.toDos array){
// Need to sort
// }

class Project{
    constructor(projectName){

        this.projectName = projectName;
        this.toDoList = []
    }

    addtoDo(...toDo){

        this.toDoList.push(...toDo)

    }

    findIndextoDo(todDo){

        const toDoIndex = this.toDoList.findIndex(toDoItem => toDoItem.uuid == todDo.uuid)
        return toDoIndex

    }

    deleteToDo(toDo){

        if(this.toDoList.length > 0){
            const toDoIndex = this.findIndextoDo(toDo);
            this.toDoList.splice(toDoIndex, 1)
        } else {
            console.log("To do list is empty")
        }



    }

    sorttoDos(){

        if(this.toDoList.length > 0){
            this.toDoList.sort((a, b)=> a.dueDate - b.dueDate)
        }

        
    }
}


export {Project}