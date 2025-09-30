export function displayProject(project){

    const projects = document.querySelector(".projects")

    const projectDiv = document.createElement("div")
    projectDiv.textContent = project.projectName;
    projectDiv.classList.add("project")
    projectDiv.projectRef  = project
    projects.appendChild(projectDiv);

}

export function setActiveProject(){

    let activeProject

    const projectsContainer = document.querySelector(".projects")
    const projects = document.querySelectorAll(".project")


    projectsContainer.addEventListener('click', (e)=>{
        let clickedProject = e.target

        if(clickedProject.classList.contains("project")){
            projects.forEach(project => project.classList.remove("active"))
            clickedProject.classList.add("active")
            activeProject = clickedProject.projectRef
            console.log(`The active project is ${activeProject.projectName}`)
        }
    })

}


export function displayToDo(project){
    const main = document.querySelector(".maincontent-verification")

    let toDoList = project.toDo



    
}