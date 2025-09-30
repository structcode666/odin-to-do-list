import { displayProject, setActiveProject } from "./dom";
import { Project } from "./projects";

const newProjectButton = document.querySelector(".new-project")
const closeProjectModalButton = document.querySelector(".close")
const closeToDoModalButton = document.querySelector(".to-do-close")
const submitProjectButton = document.querySelector(".submit-button")
const submitToDoButton = document.querySelector(".submit-to-do-button")
const form = document.querySelector(".user-input")
const toDoForm = document.querySelector(".to-do-input")
const modal = document.querySelector("#modal")
const toDoModal = document.querySelector("#to-do-modal")
const newToDoButton= document.querySelector(".new-to-do")


export function addNewProject(){
    newProjectButton.addEventListener('click', ()=> {
    modal.showModal();
    
})
}

export function addNewToDo(){
    newToDoButton.addEventListener('click', ()=> {
    toDoModal.showModal();
    
})
}

export function closeProjectModal(){
    closeProjectModalButton.addEventListener('click', ()=>{
    modal.close();
    })

}

export function closeToDoModal(){
    closeToDoModalButton.addEventListener('click', ()=>{
    toDoModal.close();
    })

}

export function createProject(){

    submitProjectButton.addEventListener('click', (e)=>{

    //prevent form from submitting to server//
    e.preventDefault();

    //retreive formdata as key value pair objects//
    const formData = new FormData(form);

    let newProject

    //define new project the user adds from the form as an object//
    for (let [name, value] of formData){
        newProject = new Project(value)
    };
    displayProject(newProject);
    setActiveProject();
    form.reset();
    modal.close();
})

}


export function assignToDos(){

    submitToDoButton.addEventListener('click', (e)=>{

    //prevent form from submitting to server//
    e.preventDefault();

    //retreive formdata as key value pair objects//
    const formData = new FormData(toDoForm);

    console.log(formData.name)

    //  for (let [name, value] of formData){
    //     console.log(`The first element of the form is ${name} and the corresponding value is ${value}`)
    // };

    
    toDoForm.reset();
    toDoModal.close();
})

}