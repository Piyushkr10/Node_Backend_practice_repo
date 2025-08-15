function calculateArea(width, height){
    return width * height;
};
let width = 10, height = 5;
let area = calculateArea(width, height);
if(area>100){
    console.log(`The area is large: ${area}`);
} else{
    console.log(`The area is small: ${area}`);
}

if(width * height>100){
    console.log("Area is greater than 100")
}