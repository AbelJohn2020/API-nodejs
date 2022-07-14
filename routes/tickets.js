const { Router } = require("express");
const router = Router();
const { Tickets } = require('../models/ticket');
const User = require("../models/user");

router.get('/', async (req, res) => {
    try {
        const dataTickets = await Tickets.find();

        res.json(dataTickets)
    } catch (error) {
        console.log(error);
    }
});

router.get('/:tickets_id', async (req, res) => {
    try {
        const { tickets_id } = req.params;
    
        const getTickets = await Tickets.find();
        const tickets = getTickets.find( ticket => ticket.tickets_id === tickets_id );
    
        res.json(tickets);
    } catch (error) {
        console.log(error);
    }
});

router.get('/:tickets_id/:ticket_id', async (req, res) => {
    try {
        const { tickets_id, ticket_id } = req.params;
    
        const getTickets = await Tickets.find();
        const tickets = getTickets.find( ticket => ticket.tickets_id === tickets_id );
    
        const ticket = tickets.tickets.find( ticket => ticket.ticket_id === ticket_id);
    
        res.json(ticket);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;