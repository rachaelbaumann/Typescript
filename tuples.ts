function SquarePerimeterAndArea(side: number): [number, number] { // [number, number] is a return type
    let perimeter = 4 * side;
    let area = side * side;
    return [perimeter, area];
}
console.log(SquarePerimeterAndArea(5));


function RectanglePerimeterAndArea(side1: number, side2: number): [number, number] {
    let perimeter = 2 * (side1 + side2);
    let area = side1 * side2;
    return [perimeter, area];
}
console.log(RectanglePerimeterAndArea(5, 10));