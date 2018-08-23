// Typesafe function that only allows string values
function printHelloWorld(person: string, element: string) {
    document.getElementById(element).innerHTML = "Hello " + person;
}

// Create a user object of type string
let user: string = "Steven";

// Selector for find HTML element to replace text in.
let element: string = "welcome-text";


// Run typesafe function that replaces HTML with input.
printHelloWorld(user, element);