// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(l, w, h) {
        this.length = l;
        this.width = w;
        this.height = h;
    }

    volume() {
        return (this.length * this.width * this.height);
    }

    surfaceArea() {
        return (2 * ((this.length * this.width) + (this.length * this.height) + (this.height * this.width)));
    }
}

const cuboid = new CuboidMaker(4, 5, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(edge) {
        super(edge, edge, edge);
        this.edge = edge;
    }

    surfaceArea() {
        return (6 * (this.edge * this.edge));
    }
}

const cube = new CubeMaker(5);

console.log(cube.volume()); // 125
console.log(cube.surfaceArea()); // 150