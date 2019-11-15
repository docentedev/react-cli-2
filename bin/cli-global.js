#!/usr/bin/env node

// action type name

// Delete the 0 and 1 argument (node and script.js)
var _args = process.argv.splice(process.execArgv.length + 2);

var action = _args[0];
var type = _args[1];
var name = _args[2];

const args = {
    action,
    type,
    name: `${name}`.toLocaleLowerCase(),
};

var creations = require('../lib/creations.js');

// Displays the text in the console
creations.play(args);