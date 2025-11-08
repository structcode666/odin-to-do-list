import {toDoItem} from "./toDo.js"
import { Project } from "./projects.js"
import { storeProject } from "./storage.js"
import { displayProject, setActiveProject } from "./dom.js"
import { addNewProject, closeProjectModal, createProject, addNewToDo, closeToDoModal, assignToDos} from "./modal.js"
import { appInit } from "./appInit.js"
import "./styles.css"
import "./reset.css"



// testing the core logic


// const testProject = new Project("Test Project")
// const testProjectTwo = new Project("Storage Test Project")
// const testPorjectThree = new Project("Project Three")

// const sampleToDo = new toDoItem("test", "testToDo", "21-07-2032", "high" )
// const sampleToDoTwo = new toDoItem("test2", "testToDo2", "02-12-2021", "low" )
// const sampleToDoThree = new toDoItem("test3", "testToDo3", "21-10-1800", "medium" )
// const sampleToDoTFour = new toDoItem("test4", "testToDo3", "21-10-1998", "medium" )

// testProject.addtoDo(sampleToDo, sampleToDoTwo, sampleToDoThree, sampleToDoTFour)

// displayProject(testProject)
// displayProject(testProjectTwo)
// displayProject(testPorjectThree)

addNewProject()
closeProjectModal()
createProject()
addNewToDo()
closeToDoModal()
assignToDos()
appInit()






// storeProject(testProjectTwo)
// storeProject(testProject)

// console.log(JSON.parse(localStorage.getItem(testProjectTwo.projectName)));
// console.log(JSON.parse(localStorage.getItem(testProject.projectName)));