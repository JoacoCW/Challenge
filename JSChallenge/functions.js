// Function that receives an array of positive integers and returns an array with only the input´s even numbers

let newarr = []

const evens = (arr) => {
    for ( let i = 0; i <= arr.length; i++){
        if ( arr[i] % 2 == 0){
            newarr.push(arr[i]);
        }
    } return newarr;
}

//Example

let exampleArr = [1,2,3,4]

console.log(evens(exampleArr));

// Function that receives a string as parameter and returns a Boolean value indicating if the word is a palindrome or not

const palindromeChecker = (str) => {
    for ( let i = 0 ; i < str.length/2 ; i++){
        if (str[i] !== str[str.length - 1 - i]){
            return false;
        }
    }
    return true;
}

//Example

console.log(palindromeChecker('ana'));  //True
console.log(palindromeChecker('anythingElse')); // False

// Create a Car object with the mentioned attributes

class Car {
    constructor(make, model, turnedOn, engineDisplacement, year) {
        this.make = make;
        this.model = model;
        this.turnedOn = turnedOn;
        this.engineDisplacement = engineDisplacement;
        this.year = year;
    }
    isOn() {
        if (this.turnedOn) {
            return true;
        } else {
            return false;
        };
    }
    turnOn() {
        turnedOn = true;
    }
    turnOff() {
        turnedOn = false;
    }
    toString() {
        return (this.year + ' ' + this.make + ' ' + this.model + ' ' + this.engineDisplacement);
    }
    getMarketingData() {
        return (this.make + ' ' + this.model + ' ' + this.year);
    }
}

const bicycle = new Car ( 'Vairo', 'Xr 3.8', 0, 0, 2019);

console.log(bicycle.getMarketingData());