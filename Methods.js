//Inputs
const person = {
    name: "Davram A. Javier",
    age: 20,
    occupation: "Student"
}
    //Process and Output
     console.log("Name: " + this.name);
     console.log("Age: "  + this.age);
     console.log("occupation: " + this.occupation);

//Class named Person
class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    //Solution 1: Display via console.log
    displayInfo() { 
        console.log("Name: " + this.name);
        console.log("Age: "  + this.age);
        console.log("occupation: " + this.occupation);
    }

    //Solution 2: Display via HTML
    displayViaHTML() {
        const personElement = document.getElementById('person1'); 
      personElement.innerHTML = `
        <strong>Name:</strong> ${this.name}<br>
        <strong>Age:</strong> ${this.age}<br>
        <strong>Occupation:</strong> ${this.occupation}
        `;
    }
}
