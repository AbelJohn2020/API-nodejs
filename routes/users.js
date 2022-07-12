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

router.get('/:id/tickets', (req, res) => {
    const { id } = req.params;
    
    const user = users.find( user => user.id === id);
    const tickets = user.tickets;
    res.json(tickets);
});

router.get('/:id/tickets/:user_id', (req, res) => {
    const { id, user_id } = req.params;

    const user = users.find( user => user.id === id);
    const tickets = user.tickets;
    const ticket = tickets.find(ticket => ticket.user_id === parseInt(user_id));
    res.json(ticket);
});

router.post('/', (req, res) => {
    const body = req.body;

    // res.json({
    //     message: 'created',
    //     data: body,
    // })

    console.log(req.body)

    // if(user_id && name && lastname && nationality && document && identification) {
    //     res.json('saved')
    // } else {
    //     res.send('wrong')
    // }
})

module.exports = router;