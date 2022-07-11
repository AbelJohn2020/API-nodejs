const createData = require('./helpers/baseForm');

const user = [{ id: 0, name: 'Abel Antonio', lastname: 'Arbildo', nationality: 'pe', document: 'dni', identification: '12345678' }]
const str = JSON.stringify(user)

createData(str)
    .then((result) => console.log(result, 'created'))
    .catch((err) => console.log(err));