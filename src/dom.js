import { storeProject } from "./storage";
import deleteImage from "../icons/delete.svg"


export function displayProject(project){

    const projects = document.querySelector(".projects")

    const projectDiv = document.createElement("div")
    projectDiv.textContent = project.projectName;
    projectDiv.classList.add("project")
    projectDiv.projectRef  = project
    projects.appendChild(projectDiv);

}

let activeProject

function createToDoButton(){


    const maincontent = document.querySelector(".maincontent-verification")

    if(!maincontent.querySelector('.new-to-do')){

    const toDoButton = document.createElement("button")
    toDoButton.classList.add("new-to-do")
    toDoButton.innerHTML = "Add to Do"
    maincontent.insertBefore(toDoButton, maincontent.firstChild)
    }else{
        return
    }


}

export function setActiveProject(){

    const projectsContainer = document.querySelector(".projects")
    // const projects = document.querySelectorAll(".project")


    projectsContainer.addEventListener('click', (e)=>{
        let clickedProject = e.target

        if(clickedProject.classList.contains("project")){
            projectsContainer.querySelectorAll(".project").forEach(project => project.classList.remove("active"))
            clickedProject.classList.add("active")
            activeProject = clickedProject.projectRef
            displayToDo(activeProject)
            createToDoButton()
            console.log(activeProject.toDoList)
        }
        

    
        
    })

}

export function getActiveProject(){

    return activeProject;

}


export function displayToDo(project){

    const toDoContainer = document.querySelector(".to-do-container")

    toDoContainer.innerHTML = ""


    let toDoList = project.toDoList

    if(toDoList.length != 0 ){
        toDoList.forEach((toDo)=>{
        createProjectCard(toDo)
    })

    }

    // console.log(toDoList)

   
}





function createProjectCard(toDo){
    const toDoContainer = document.querySelector(".to-do-container")

    //create project card//
    let projectCard = document.createElement("div")
    projectCard.classList.add("card")

    //add Title to project card//
    const projectTitle  = document.createElement("h5");
    projectTitle.textContent = toDo.title;
    projectTitle.classList.add("project-title")
    projectCard.appendChild(projectTitle);

    //add project description//
    const projectDescription = document.createElement("div");
    projectDescription.classList.add("project-description");
    projectCard.appendChild(projectDescription)

    const projectInfo = document.createElement("p");
    projectInfo.textContent= toDo.description
    projectDescription.appendChild(projectInfo)

    const projectDueDate = document.createElement("p");
    projectDueDate.textContent= `Due Date : ${toDo.formatDate()}`
    projectDescription.appendChild(projectDueDate)

    //add read checkbox//
    const projectComplete= document.createElement("div");
    projectComplete.classList.add("project-complete")
    projectComplete.textContent = "Project Complete?"
    const projectCheckBox = document.createElement("input");
    projectCheckBox.type = 'checkbox';
    projectCheckBox.classList.add("project-checkbox")
    projectCheckBox.checked = toDo.complete
    projectCheckBox.addEventListener("change", ()=>{

        toDo.complete = projectCheckBox.checked;
        let activeProject = getActiveProject();
        storeProject(activeProject)
    })
   

    //create delete button//
    const deleteIcon = document.createElement("img")
    deleteIcon.src = deleteImage
    deleteIcon.classList.add("delete-icon", toDo.uuid) 
    projectDescription.appendChild(deleteIcon);

    projectComplete.appendChild(projectCheckBox)
    projectDescription.appendChild(projectComplete)
    toDoContainer.appendChild(projectCard)



   



    //add functionality to delete icon//
    deleteIcon.addEventListener('click', ()=>{

        //remove bookCard from the DOM//
        toDoContainer.removeChild(projectCard);

        //active project//

        let activeProject = getActiveProject();

        //need to also remove from the lirary//

        activeProject.deleteToDo(toDo);
        console.log(activeProject.toDoList)

    })


    

}