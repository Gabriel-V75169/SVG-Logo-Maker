const fs = require('fs');
const inquirer = require('inquirer');
const {shapes, Circle, Square, Triangle} = require('./lib/shapes');



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
                "triangle",
                "circle",
                "square"
            ]
        },
        {
            type: 'list',
            name: 'shapeColor',
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
            name: 'textColor',
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
    ]);
};




function writeToFile(svg, data) {
    if(data.shape == "circle"){
        currentShape = new Circle(data.shapeColor, data.text, data.textColor)
    }

    if(data.shape == "square"){
        currentShape = new Square(data.shapeColor, data.text, data.textColor)
    }

    if(data.shape == "triangle"){
        currentShape = new Triangle(data.shapeColor, data.text, data.textColor)
    }
    svg = shapes(currentShape.render());

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