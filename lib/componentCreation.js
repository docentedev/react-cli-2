const path = require('path')
const fs = require("fs");
const utils = require('./utils');

const componentCreation = (args, compDir) => {
    const name = `${args.name}`.trim().toLocaleLowerCase();
    const PascalName = utils.kebab2Pascal(name);
    const kebabFolder = name;

    const compFile = path.join(compDir, `${PascalName}.jsx`);
    const compStyle = path.join(compDir, `${PascalName}.css`);
    const compTest = path.join(compDir, `${PascalName}.test.jsx`);

    fs.promises.mkdir(compDir)
        .then(() => {

            const isClassComp = args.type === 'component-class' || args.type === 'cc';
            const componentFileName = isClassComp ? 'CompClass.jsx' : 'Comp.jsx';

            const templateJSX = path.join(__dirname, 'templates', 'comp', componentFileName);
            const templateJSXCss = path.join(__dirname, 'templates', 'comp', 'Comp.css');
            const templateJSXTest = path.join(__dirname, 'templates', 'comp', 'Comp.test.jsx');
            const objReplace = { kebab: name, pascal: PascalName };

            utils.createFile(templateJSX, compFile, objReplace);
            utils.createFile(templateJSXCss, compStyle, objReplace);
            utils.createFile(templateJSXTest, compTest, objReplace);

            console.log(`Component ${PascalName} create`);

        })
        .catch(console.error);
}

exports.componentCreation = componentCreation;