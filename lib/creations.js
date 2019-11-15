// require('path').basename(__dirname);
const path = require('path')
const fs = require("fs"); // Or `import fs from "fs";` with ESM

const componentCreation = require('./componentCreation').componentCreation;
const moduleCreation = require('./moduleCreation').moduleCreation;
const initialProject = require('./initialProject').initialProject;
/**
 * Displays a string in the console
 * 
 * @param {Object} args string to show in the console
 * @param {'create'} args.action string to show in the console
 * @param {'component' | 'component-class' | 'service'} args.type  string to show in the console
 * @param {string} args.name string to show in the console
 */
const play = function(args) {

    // comprobamos que sea una creacion de componente
    if (
        args.name &&
        (args.action === 'create' || args.action === 'c') &&
        (
            (args.type === 'component' || args.type === 'c') ||
            (args.type === 'component-class' || args.type === 'cc')
        )
    ) {
        // directorio desde donde se ejecuta el comando
        const compDir = path.join(process.cwd(), args.name);
        if (!fs.existsSync(compDir)) {
            componentCreation(args, compDir);
        }
    }

    // create module-redux name:action
    if (
        args.name &&
        (args.action === 'create' || args.action === 'c') &&
        (
            (args.type === 'module-redux' || args.type === 'mr')
        )
    ) {
        // directorio desde donde se ejecuta el comando
        const compDir = path.join(process.cwd(), args.name.split(':')[0]);
        if (!fs.existsSync(compDir)) {
            moduleCreation(args, compDir);
        }
    }

    // initialize react-redux-reactrouter
    if (
        args.name &&
        (args.action === 'initialize' || args.action === 'i') &&
        (
            (args.type === 'react-redux-reactrouter' || args.type === 'rrr')
        )
    ) {
        // directorio desde donde se ejecuta el comando
        const currentExecDir = process.cwd();
        initialProject(args, currentExecDir);
    }

    return '';
};

exports.play = play;