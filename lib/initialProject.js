const path = require('path')
const fs = require("fs");
const utils = require('./utils');

const initialProject = (args, currentExecDir) => {

    if (!fs.existsSync(path.join(currentExecDir, 'containers'))) {
        fs.promises.mkdir(path.join(currentExecDir, 'containers'))
            .then(() => {})
            .catch(console.error);
    }
    if (!fs.existsSync(path.join(currentExecDir, 'store'))) {
        fs.promises.mkdir(path.join(currentExecDir, 'store'))
            .then(() => {

                const indexName = path.join(currentExecDir, 'store', 'index.js');
                const indexConstFileSource = path.join(__dirname, 'templates', 'initial', 'store.index.js');
                utils.createFile(indexConstFileSource, indexName, objReplace);

                const storeConstName = path.join(currentExecDir, 'store', 'index.js');
                const storeConstFileSource = path.join(__dirname, 'templates', 'initial', 'rootReducer.js');
                utils.createFile(storeConstFileSource, storeConstName, objReplace);

                if (!fs.existsSync(path.join(currentExecDir, 'containers', 'modules'))) {
                    fs.promises.mkdir(path.join(currentExecDir, 'containers', 'modules'))
                        .then(() => {})
                        .catch(console.error);
                }

            })
            .catch(console.error);
    }
    if (!fs.existsSync(path.join(currentExecDir, 'components'))) {
        fs.promises.mkdir(path.join(currentExecDir, 'components'))
            .then(() => {})
            .catch(console.error);
    }

    const objReplace = {
        exampleRoute: 'export const HOME = \'/\'',
    };

    const routeConstName = path.join(currentExecDir, 'routes.js');
    const routeConstFileSource = path.join(__dirname, 'templates', 'initial', 'routes.js');
    utils.createFile(routeConstFileSource, routeConstName, objReplace);

    console.log('Remember install Redux, React Redux and React Router Dom');
    console.log('npm install --save redux react-redux react-router-dom');

}

exports.initialProject = initialProject;