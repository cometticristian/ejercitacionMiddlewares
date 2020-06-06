const fs = require('fs');
const path = require('path');

let fileRoute = path.join('logs', 'userLogs.txt');

function holaMundo (req, res, next) {
    fs.appendFileSync(fileRoute, 'El usuario ingresó a la ruta: ' + req.url + '\n' + '\n');
    next();
}

module.exports = holaMundo;