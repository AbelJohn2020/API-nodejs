const fs = require('fs');

async function createData (data) {
    return fs.writeFile('form.json', data)
}


module.exports = createData;