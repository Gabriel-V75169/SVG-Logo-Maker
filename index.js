const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./lib/shapes');

const questions = [
    "What shape would you like to use ?",
    "What color would you like your shape to be ?",
    "What will the text in the shape be ?",
    "What color will the text be ?"
];

const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'shape',
            message: questions[0],
            choices: [
                "Triangle",
                "Circle",
                "Square"
            ]
        },
        {
            type: 'list',
            name: 'shape-color',
            message: questions[1],
            choices: [
                "Red",
                "Blue",
                "White",
                "Black",
                "Green",
                "Yellow",
                "Purple",
                "Orange",
            ]
        },
        {
            type: 'input',
            name: 'text',
            message: questions[2],
        },
        {
            type: 'list',
            name: 'text-color',
            message: questions[3],
            choices: [
                "Red",
                "Blue",
                "White",
                "Black",
                "Green",
                "Yellow",
                "Purple",
                "Orange",
            ]
        }
    ])
}




function writeToFile(svg, data) {
    svg = generate.shapes(data);

    return svg;
};

function init() {
    promptUser()
        .then (answers => {
            let svg = "";
            svg = writeToFile(svg, answers);
            fs.writeFile('Test.svg', svg, err => 
            err? console.log(err): console.log("SVJ generated"));
        });
    
};

init();