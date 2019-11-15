// $(NAME_UPPER)_$(INITIAL_UPPER)_
// $(initialCamel)

const path = require('path')
const fs = require("fs");
const utils = require('./utils');

// create module-redux name:action
const moduleCreation = (args, compDir) => {
    const nameAndAction = `${args.name}`.trim().toLocaleLowerCase().split(':');
    const name = nameAndAction[0];
    const action = nameAndAction[1];

    const PascalName = utils.kebab2Pascal(name);
    const camelCase = utils.kebab2Camel(name);
    const UPPER_NAME = utils.kebab2Upper(name);
    const actionCamel = utils.kebab2Camel(action);
    const UPPER_ACTION = utils.kebab2Upper(action);

    const kebabFolder = name;

    const actionsFile = path.join(compDir, `actions.js`);
    const constFile = path.join(compDir, `const.js`);
    const reducerFile = path.join(compDir, `reducer.${actionCamel}.js`);
    const indexFile = path.join(compDir, `index.js`);

    fs.promises.mkdir(compDir)
        .then(() => {

            const actionsFileSource = path.join(__dirname, 'templates', 'redux-module', 'actions.js');
            const constFileSource = path.join(__dirname, 'templates', 'redux-module', 'const.js');
            const reducerFileSource = path.join(__dirname, 'templates', 'redux-module', 'reducer.js');
            const indexFileSource = path.join(__dirname, 'templates', 'redux-module', 'index.js');

            const objReplace = {
                kebab: name,
                pascal: PascalName,
                upper: UPPER_NAME,
                actionCamel: actionCamel,
                actionUpper: UPPER_ACTION,
            };

            utils.createFile(actionsFileSource, actionsFile, objReplace);
            utils.createFile(constFileSource, constFile, objReplace);
            utils.createFile(reducerFileSource, reducerFile, objReplace);
            utils.createFile(indexFileSource, indexFile, objReplace);

            console.log(`Redux Module ${name} create`);

        })
        .catch(console.error);
}

exports.moduleCreation = moduleCreation;