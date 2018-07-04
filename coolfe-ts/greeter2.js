function greeter2(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user = { firstName: 'coolfe', lastName: 'lalalala' };
document.body.innerHTML = greeter2(user);
