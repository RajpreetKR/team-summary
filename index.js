const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

function createManager() {

    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's id?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officeNo",
            message: "What is the manager's office number?"
        },
    ])
    .then(data => {
        console.log(data);
        // we create a new INSTANCE of a MANAGER OBJECT
        let newManager = new Manager(data.name, data.id, data.email, data.officeNumber)
        console.log("New Manager: ", newManager)
        // WE ADD THE NEW MANAGER TO OUR TEAM
    })
    .catch(error => {
        console.log(error);
    });

}

createManager();

// -- We want to BUILD a TEAM (of EMPLOYEES)
// -- We need a MANAGER (1)  --> What data do I need to CREATE a NEW MANAGER INSTANCE (?)
//    -- We prompt the USER for data --> name, id and email of new MANAGER (what do we do with it?)
//    -- We wnat to CREATE a NEW INSTANCE of a MANAGER OBJECT from the the User input
//    -- What do we do with our NEW MANAGER(?) --> We want to ADD our new manager to our TEAM 

// -- We need/want an ENGINEER (1+)
//    -- We prompt the USER for data --> name, id and email of new ENGINEER (what do we do with it?)
//    -- We wnat to CREATE a NEW INSTANCE of a ENEGINER OBJECT from the the User input
//    -- What do we do with our NEW ENGINEER(?) --> We want to ADD our new manager to our TEAM 

// -- We need/want an INTERN (1+)
//    -- We prompt the USER for data --> name, id and email of new MANAGER (what do we do with it?)
//    -- We wnat to CREATE a NEW INSTANCE of a MANAGER OBJECT from the the User input
//    -- What do we do with our NEW INTERN(?) --> We want to ADD our new manager to our TEAM 


