//alert('We are Beta!!!!');
console.log('We are Beta!!!');

var firstName = 'Barbara';
var age = 9;

let lastName = 'Nartey';
const boilingWaterTemperature = 100;

console.log(firstName, age, lastName, boilingWaterTemperature);

//if else statement
/*if (age >=18){
    console.log('You are eligible');
}else {
    console.log('Wait till you are 18');
} */

//for loops
for (let i=1; i<8; i++){
    console.log('I am at index;', i);
}

//functions - Defining
function isEligible(){
    if (age >=18){
        return 'You are eligible';
    }else {
        return 'Wait till you are 18';
    }
}

//Invoking a Function
//console.log(isEligible());
alert (isEligible());

//document.body.innerHTML = isEligible();