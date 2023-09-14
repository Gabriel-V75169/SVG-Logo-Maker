function generateMarkdown(data) {
    if (data.shape == "circle"){
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

    </svg>`;} else if(data.shape == "triangle"){
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <svg height="300" width="400">
    <polygon points="250,60 100,400 400,400" fill="${data.shapeColor}" />
    

  <text x="248" y="220" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

    </svg>`;} else{
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect x="50" y="20" width="150" height="150" fill= "${data.shapeColor}"/>

  <text x="125" y="110" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>;
    </svg>`};
};

module.exports = {
    generateMarkdown,
}