import { localStorageProjects } from "./storage";
import { displayProject, displayToDo, setActiveProject } from "./dom";

export function appInit(){

    let list = localStorageProjects();

    list.forEach((project)=>{
        displayProject(project);
        // displayToDo(project)
    })
    setActiveProject();
}