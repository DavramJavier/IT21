class Person{

    //Private Fields
    #name;
    #age;
    #occupation;

    constructor(name, age, occupation){
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
    }

    //Getters
    get name(){
        return this.#name;
    }

    get age(){
        return this.#age;
    }

    get occupation(){
        return this.#occupation;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
    }

    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Occupation:</strong> ${this.occupation}
        `;
    }
}

class Student extends Person {
    constructor(name, age, occupation, StudentID) {
        super(name, age, occupation);
        this.StudentID = StudentID;
    }

    // Overriding the displayInfo method
    displayInfo() {
        super.displayInfo();
        console.log("StudentID: " + this.StudentID);
    }

    // Extending the displayInfoHTML method
    displayInfoHTML() {
        super.displayInfoHTML();
        const personElement = document.getElementById('personOne');
        personElement.innerHTML += `<br><strong>StudentID:</strong> ${this.StudentID}`;
    }
}

// Creating an instance of the Student class
const studentOne = new Student('Davram', 20, 'Student', '20231704');

// Calling methods
studentOne.displayInfo();