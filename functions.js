// add your code here
console.info("page loaded");
var person = {
    employed: true,
    age: 29,
    name: 'First Last',
    skills: ['html', 'css', 'js']
};
console.debug(person);
console.info(person.name);
console.debug(person.age);
console.debug(person.employed);

// declaration
function getInfo(name) {
    var msg = "Hello " + name + ", " +
        "welcome at FastTrackIT.";
    return msg;
}
// store result of call to function
var info = getInfo("Manu");
console.info(info);