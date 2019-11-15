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

                const routeConstName = path.join(currentExecDir, 'store', 'index.js');
                const routeConstFileSource = path.join(__dirname, 'templates', 'initial', 'store.index.js');
                utils.createFile(routeConstFileSource, routeConstName, objReplace);

                const routeConstName = path.join(currentExecDir, 'store', 'index.js');
                const routeConstFileSource = path.join(__dirname, 'templates', 'initial', 'rootReducer.js');
                utils.createFile(routeConstFileSource, routeConstName, objReplace);

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

}

exports.initialProject = initialProject;