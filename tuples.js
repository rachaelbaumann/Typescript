function SquarePerimeterAndArea(side) {
    var perimeter = 4 * side;
    var area = side * side;
    return [perimeter, area];
}
console.log(SquarePerimeterAndArea(5));
function RectanglePerimeterAndArea(side1, side2) {
    var perimeter = 2 * (side1 + side2);
    var area = side1 * side2;
    return [perimeter, area];
}
console.log(RectanglePerimeterAndArea(5, 10));
