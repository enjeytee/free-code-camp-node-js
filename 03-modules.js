// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names.js');
console.log(names);

const sayHi = require('./05-utils.js');
console.log(sayHi);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

const { john, peter } = require('./04-names.js');
sayHi(john);
sayHi(peter);

const alternativeFlavor = require('./06-alternative-flavor.js');
console.log(alternativeFlavor);

require("./07-mind-grenade.js");