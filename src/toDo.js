import { parse, format } from "date-fns";

class toDoItem{

    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = parse(dueDate, 'dd-MM-yyyy', new Date())
        this.priority = priority;
        this.uuid = crypto.randomUUID();
    }

    formatDate(){

        return formattedDueDate = format(this.dueDate, 'dd-MM-yyyy')
    }
    
}

export {toDoItem}