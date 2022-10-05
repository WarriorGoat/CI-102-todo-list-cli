const prompt = require('prompt-sync')({sigint: true});

//To Do List App with Command Line Interface

let option = 0

console.log("Welcome to your action tracker!!");
console.log(); //leaves a blank space between lines

selectOption()

let toDoList = [];
let status = [];

while (option !== 6) {
    if (option ===1) {
        console.log('\n~ Creating a new to-do item ~');
        console.log('What is the item called?');
        
        //add to do item
        let addItem = prompt ('> ');
        while(addItem.length <1){ //checks input for empty string
            console.log("Please input a valid task");
            addItem = prompt ('Please try again:> ');
        }

        toDoList.push(addItem); //adds the task to the array
        status.push("Not Complete"); //sets the initial status at incomplete
        console.log(); //leaves a blank space between lines
        displayList();
         //reprompt the user
         selectOption()
     }else if (option ===2) {
        console.log('\n~ Completeing a to-do item ~');
        console.log('Which to-do item would you like to mark complete? Please enter the item number');
        
        //complete an item
        let newStatus = prompt ('> ')
        status[newStatus-1]="Complete"
        //leaves a blank space between lines
        displayList()
        //reprompt the user
        selectOption()
    } else if (option ===3) {
        console.log('\n~ Un-completeing a to-do item ~');
        console.log('Which to-do item would you like to mark as un-complete? Please enter the item number');
        
        //complete an item
        let newStatus = prompt ('> ')
        status[newStatus-1]="Not Complete"
        
        displayList()
        //reprompt the user
        selectOption()
    }else if (option ===4) {
        console.log('\n~ Deleting a to-do item ~');
        console.log('Which to-do item would you like to delete? Please enter the item number');
        
        //delete an item
        let del = prompt ('> ');
        console.log(`Please verify you want to delete ${toDoList[del-1]}`);//confirm delete request
        let challenge = prompt ('yes or no> ');
        if (challenge === "yes") {
            toDoList.splice(del-1,1); //deletes the task from the array
        status.splice(del-1,1); //deletes the status from the array
        displayList();
        //reprompt the user
        selectOption();
        } else{
            displayList();
            //reprompt the user
            selectOption();
        }
    }else if (option ===5) {
        console.log('\n~ Editing a to-do item ~');
        console.log('Which to-do item would you like to edit? Please enter the item number');
        
        //delete an item
        let edit = prompt ('> ');
        console.log(`Please verify you want to edit ${toDoList[edit-1]}.  Note this will automatically reset the status to Not Complete.`);//confirm edit request
        let challenge = prompt ('yes or no> ');
        if (challenge === "yes") {
            let revision = prompt ('Enter the new task> ')
            toDoList[edit-1] = revision;
            status[edit-1]="Not Complete"

        displayList();
        //reprompt the user
        selectOption();
        } else{
            displayList();
            //reprompt the user
            selectOption();
        }
    }
    else {
        console.log("Invalid Operation. Please try again.");
    }
}
// Exiting Application
console.log("~ Exiting To-Do List Application");
console.log();


//Global Functions for the program
function selectOption(){
    console.log("  Select an Action \n");
    // console.log();
    console.log("[1] Create a to-do item");
    console.log("[2] Complete a to-do item");
    console.log("[3] Un-Complete a to-do item");
    console.log("[4] Delete a to-do item");
    console.log("[5] Edit an to-do item");
    console.log("[6] Exit to-do list");
    option = Number(prompt("> "));
}

function displayList(){
    if(toDoList.length === 0){
        console.log("Your list is empty.");
    }else {
        console.log(`\n You have ${toDoList.length} to-do item(s)`);
    }
    for(let i = 0; i < toDoList.length; i++){
        console.log(`${i+1}. ${toDoList[i]}  [${status[i]}]`);
        
}console.log();//leaves a blank space between lines
}



/* create a series of options with an input.
use the input to pick from options in a while loop.

prompts:
    numbers to decide which option using ifs
    1. adding a task/create an item - prompt user for item to create
    2. 

While Loop:  program has no known ending, so we want to be able to prompt them indefinitetly/ until they decide to exit

display the to-do list to the user
include: 
  completion status
  name of the item
  number associated with the item
  loop to display each item in the ToDo list

2.  add to do items (choice === 1)
 - prompt for the to-do item
 - save the item by storing it in an array - .push()
 - an array to keep track of toDo items - global variable

 2.5 How do we set items to be incomplete
  - Any item on the list is incomplete until we mark it complete
  - All new items are incomplete by default

  an array of booleans?
[true,   false,   true]  status array
["task1, task2,  task3"] To Do list array
   0       1       2     Shared index locations


3.  complete to do items

*/