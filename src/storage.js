import { Project } from "./projects";
import { toDoItem } from "./toDo";
import { displayProject, setActiveProject, getActiveProject, displayToDo} from "./dom";

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export function storeProject(project){

    if (storageAvailable("localStorage")) {
        localStorage.setItem(project.projectName, JSON.stringify(project))
    } else {
        console.log("Local storage not available")
    }
}


export function getProject(project){

      if (storageAvailable("localStorage")) {
        return JSON.parse(localStorage.getItem(project))
    } else {
        console.log("Local storage not available")
    }


}

export function reconstructProject(projectObject){

  let retreivedObject = getProject(projectObject.projectName);

  let reconstructedProject = new Project (retreivedObject.projectName);

  retreivedObject.toDoList.forEach((toDo)=>{

    let newToDo = new toDoItem(toDo.title, toDo.description, toDo.dueDate, toDo.priority)

    newToDo.complete = toDo.complete
    reconstructedProject.addToDo(newToDo);
  }
  )


  return reconstructedProject

}

export function localStorageProjects(){

  let projectsList = []

    if (storageAvailable("localStorage")) {
        for (const key in localStorage){
          if(localStorage.hasOwnProperty(key)){
            let project = reconstructProject(getProject(key))
            projectsList.push(project)
          }
        }
    } else {
        console.log("Local storage not available")
    }

    return projectsList
}


