import { parse, format, parseISO } from "date-fns";

class toDoItem{

    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = this.parseDueDate(dueDate)
        // this.dueDate = parse(dueDate, 'yyyy-MM-dd', new Date())
        this.priority = priority;
        this.complete = false;
        this.uuid = crypto.randomUUID();
    }

    formatDate(){

        return format(this.dueDate, 'dd-MM-yyyy')
    }

    changeState(){

        if(this.complete){
            return this.complete = false
        } else if (!this.complete){
            return this.complete = true
        } else {
            return
        }
    }

    parseDueDate(dateString) {
    
    if (typeof dateString === "string") {
        // ISO 8601 strings usually contain 'T'
        if (dateString.includes("T")) {
            let dateObject =  parseISO(dateString);

            const formattedDate = format(dateObject, 'yyyy-MM-dd')
            return formattedDate;
        } else {
            // assume format is yyyy-MM-dd
            return parse(dateString, "yyyy-MM-dd", new Date());
        }
    }
}

    
}

export {toDoItem}