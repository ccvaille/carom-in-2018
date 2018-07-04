interface Person {
    firstName: string;
    lastName: string;
}

function greeter2 (person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = { firstName: 'coolfe', lastName: 'lalalala' };

document.body.innerHTML = greeter2(user);