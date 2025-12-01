var areaOfShapes = "Circle";
var a = 5;
var b = 10;
var result;
switch(areaOfShapes) {
    case "Square":  a *a ;
    console.log(result);
    break;

    case "rectangle": 
    result = a * b;
    console.log(result);
    break;

    case "Circle": 
    var r =2;
    result = 3.142 * r * r;
    console.log(result);
    break;

    default:
        console.log("No shape match");
}
