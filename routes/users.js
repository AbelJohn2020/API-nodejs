const { Router } = require("express");
const users = require('../user.json');
const router = Router();


router.get('/', (req, res) => {
    res.json(users)
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    
    const user = users.find( user => user.id === id);
    res.json(user);
});

router.post('/', (req, res) => {
    const { user_id, name, lastname, nationality, document, identification } = req.body;
    console.log(req.body)

    if(user_id && name && lastname && nationality && document && identification) {
        res.json('saved')
    } else {
        res.send('wrong')
    }
})

module.exports = router;