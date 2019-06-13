// CODE here for your Lambda Classes

// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

class People {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends People {
    constructor(insAttrs) {
        super(insAttrs);
        this.favLanguage = insAttrs.favLanguage;
        this.specialty = insAttrs.favLanguage;
        this.catchPhrase = insAttrs.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    } // * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    } // * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

    gradeRandom(student) {
        let grade = student.grade;
        let random = (Math.random() * 10);
        if (random >= 5) {
            return grade + random;
        } else {
            return grade - random;
        }
    }
}

class Student extends People {
    constructor(stuAttrs) {
        super(stuAttrs);
        this.previousBackground = stuAttrs.previousBackground;
        this.className = stuAttrs.className;
        this.favSubjects = stuAttrs.favSubjects;
        this.grade = 95;
    }

    listsSubjects() {
        return `${this.favSubjects}`;
    }  //` a method that logs out all of the student's favoriteSubjects one by one.
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }  //` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }  // ` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
}

class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    } //   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    } //   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const dan = new Instructor({
    name: 'Dan',
    age: Infinity,
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia', 
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!'
});

const bryan = new Student({
    name: 'Bryan Szendel',
    location: 'Colorado Springs',
    age: 29,
    previousBackground: 'Tech Support',
    className: 'WEB21',
    favSubjects: ['HTML', 'CSS', 'Javascript']
})

const sylvia = new Student({
    name: 'Sylvia',
    location: 'Florida',
    age: 27,
    previousBackground: 'Traveller',
    className: 'WEB21',
    favSubjects: ['HTML', 'CSS', 'Javascript']
})

const sean = new ProjectManager({
    name: 'Sean Wu',
    location: 'NYC',
    age: 0,
    gradClassName: 'WEBPT3',
    favInstructor: 'Dan Levy',    
})



console.log(bryan.speak());
console.log(`${dan.name} is really good at ${dan.specialty}.`);
console.log(fred.demo('JavaScript'));
console.log(bryan.listsSubjects());
console.log(sean.debugsCode(bryan, 'JavaScript'));
console.log(fred.grade(bryan, 'JavaScript IV'));
console.log(sean.standUp('WEB21_sean'));
console.log(sylvia.speak());
console.log(`${sylvia.name} was a ${sylvia.previousBackground} in ${sylvia.location} but she quit to attend Lambda in ${sylvia.className} and her favorites are ${sylvia.listsSubjects()}.`);
console.log(sylvia.PRAssignment('JavaScript IV'));
console.log(sean.gradeRandom(bryan));


// #### Person

// * COMPLETE First we need a Person class. This will be our `base-class`
// * COMPLETE Person receives `name` `age` `location` all as props
// * COMPLETE Person receives `speak` as a method.
// * COMPLETE This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

// #### Instructor

// * COMPLETE Now that we have a Person as our base class, we'll build our Instructor class.
// * COMPLETE Instructor uses the same attributes that have been set up by Person
// * COMPLETE Instructor has the following unique props:
//   * COMPLETE `specialty` what the Instructor is good at i.e. 'redux'
//   * COMPLETE `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * COMPLETE `catchPhrase` i.e. `Don't forget the homies`
// * COMPLETE Instructor has the following methods:
//   * COMPLETE `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * COMPLETE `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

// #### Student

// * COMPLETE Now we need some students!
// * COMPLETE Student uses the same attributes that have been set up by Person
// * COMPLETE Student has the following unique props:
//   * COMPLETE `previousBackground` i.e. what the Student used to do before Lambda School
//   * COMPLETE `className` i.e. CS132
//   * COMPLETE `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * COMPLETE Student has the following methods:
//   * COMPLETE `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * COMPLETE `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * COMPLETE `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

// #### Project Manager

// * COMPLETE Now that we have instructors and students, we'd be nowhere without our PM's
// * COMPLETE ProjectManagers are extensions of Instructors
// * COMPLETE have the following unique props:
//   * COMPLETE `gradClassName`: i.e. CS1
//   * COMPLETE `favInstructor`: i.e. Sean
// * COMPLETE ProjectManagers have the following Methods:
//   * COMPLETE `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * COMPLETE `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`