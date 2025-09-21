import {toDoItem} from "./toDo.js"
import { Project } from "./projects.js"
import { storeProject } from "./storage.js"


const testProject = new Project("Test Project")
const testProjectTwo = new Project("Storage Test Project")

const sampleToDo = new toDoItem("test", "testToDo", "21-07-2032", "high" )
const sampleToDoTwo = new toDoItem("test2", "testToDo2", "02-12-2021", "low" )
const sampleToDoThree = new toDoItem("test3", "testToDo3", "21-10-1800", "medium" )
const sampleToDoTFour = new toDoItem("test4", "testToDo3", "21-10-1998", "medium" )

testProject.addtoDo(sampleToDo, sampleToDoTwo, sampleToDoThree, sampleToDoTFour)

testProject.sorttoDos()

console.log(testProject.toDoList)


// console.log(sampleToDo)
console.log(testProject)

console.log(testProject.findIndextoDo(sampleToDoThree))


storeProject(testProjectTwo)

console.log(JSON.parse(localStorage.getItem(testProjectTwo.projectName)));