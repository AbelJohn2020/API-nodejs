const { Router } = require("express");
// const users = require('../user.json');
const router = Router();
const User = require('../models/user');
const Ticket = require('../models/ticket');

router.get('/', async (req, res) => {
    try {
        const dataUsers = await User.find();

        res.json(dataUsers)
    } catch (error) {
        console.log(error);
    }
});

router.get('/:user_id', async (req, res) => {
    try {
        const { user_id } = req.params;
    
        const users = await User.find();
        const user = users.find( user => user.user_id === user_id );
        
        res.json(user);
    } catch (error) {
        console.log(error);
    }
});

router.get('/:user_id/:tickets_id', async (req, res) => {
    try {
        const { user_id } = req.params;
        
        const users = await User.find();
        const user = users.find( user => user.user_id === user_id );
    
        const getTickets = await Ticket.find();
        const tickets = getTickets.find( ticket => ticket.tickets_id === user.tickets_id );
    
        res.json(tickets);
    } catch (error) {
        console.log(error);
    }
});

router.get('/:user_id/:tickets_id/:ticket_id', async (req, res) => {
    try {
        const { user_id, ticket_id } = req.params;
    
        const users = await User.find();
        const user = users.find( user => user.user_id === user_id );
    
        const getTickets = await Ticket.find();
        const tickets = getTickets.find( ticket => ticket.tickets_id === user.tickets_id );
    
        const ticket = tickets.tickets.find( ticket => ticket.ticket_id === ticket_id);
    
        res.json(ticket);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    const body = req.body;

    console.log(body)   
    res.json(body)
})

module.exports = router;