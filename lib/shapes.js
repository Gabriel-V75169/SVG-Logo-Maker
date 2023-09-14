class Shapes {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
}

function shapes (data) {
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${data}
  </svg>`
}

    class Circle extends Shapes{
    render() {
    return `
  <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
  <text x="150" y="116" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  `;}
}; 
    
  class Triangle extends Shapes{
    render() {
    return `
    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
    <text x="150" y="126" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    `;};
}; 
    
class Square extends Shapes{
  render() {
    return `
    <rect x="50" y="20" width="150" height="150" fill="${this.shapeColor}"/>
  <text x="125" y="110" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>;
  `}
};

module.exports = {
    Shapes, Circle, Square, Triangle, shapes
}