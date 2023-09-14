const {Circle, Square, Triangle} = require('../lib/shapes');

describe('Shapes', () => {

    let shape;
    // each test that the shapes new color and ensures that it renders as expected
    describe('Circle', () => {
        it('The rendered shape should match the color given', () => {

            shape = new Circle("blue", "SVG", "red");
            expect(shape.render()).toContain(`<circle cx="150" cy="100" r="80" fill="blue" />`);

        });
    });

    describe('Triangle', () => {
        it('The rendered shape should match the color given', () => {

            shape = new Triangle("blue", "SVG", "red");
            expect(shape.render()).toContain(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
            
        });
    });

    describe('Square', () => {
        it('The rendered shape should match the color given', () => {

            shape = new Square("blue", "SVG", "red");
            expect(shape.render()).toContain(`<rect x="50" y="20" width="150" height="150" fill="blue"/>`);
            
        });
    });

});