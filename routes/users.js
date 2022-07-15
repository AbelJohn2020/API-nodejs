const { Router } = require("express");
const mongoose = require('mongoose');
// const users = require('../user.json');
const router = Router();
const User = require('../models/user');
const { Tickets } = require('../models/ticket');
const { getUserId, getTicketId } = require("../utils/getids");

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
    
        const getTickets = await Tickets.find();
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
    
        const getTickets = await Tickets.find();
        const tickets = getTickets.find( ticket => ticket.tickets_id === user.tickets_id );
    
        const ticket = tickets.tickets.find( ticket => ticket.ticket_id === ticket_id);
    
        res.json(ticket);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    const id = mongoose.Types.ObjectId();
    const reqBody = req.body;

    try {
        const getUsers = await User.find()
        const len = getUsers.length;
        const body = { ...reqBody, _id: id, user_id: getUserId(len), tickets_id: getTicketId(len) };


        const newUsers = new User(body);
        await newUsers.save();

        const theNewUsers = await User.find();
        res.json(theNewUsers);
    } catch (error) {
        console.log(error);
    }
});

router.post('/:user_id/:tickets_id', async (req, res) => {
    const id = mongoose.Types.ObjectId();
    const body = req.body;
    const { user_id, tickets_id } = req.params;

    try {
        const getUsers = await User.find();

        const validateUserId = getUsers.filter(element => element.user_id === user_id);
        const len = validateUserId.length;

        if(len === 1) {
            const parms = {_id: id, tickets_id, tickets: [...body]};
            const newTickets = new Tickets(parms);

            await newTickets.save();

            const theNewTickets = await Tickets.find();
            res.json(theNewTickets);
        } else {
            return {
                type: "error",
                status: "404",
                message: "Invalid user_id or tickets_id"
            }
        }
    } catch (error) {
        console.log(error)
    }
});

router.patch('/:user_id', async (req, res) => {
    const { user_id } = req.params;
    const body = req.body;
    
    try {
        const users = await User.find();
        const getUser = users.filter(user => user.user_id === user_id);
        if(getUser.length === 1) {
            const updateUsers = await User.findOneAndUpdate({ user_id }, {$set: {...body, user: body.user}}, {new: true})
            res.json(updateUsers);
        } else {
            return {
                type: "error",
                status: "404",
                message: "Invalid user_id"
            }
        }
    } catch (error) {
        console.log(error)
    }
});

router.patch('/:user_id/:tickets_id/:ticket_id', async (req, res) => {
    const { user_id, tickets_id, ticket_id } = req.params;
    const body = req.body;
    
    try {
        const users = await User.find();
        const getUser = users.filter(user => user.user_id === user_id);
        if(getUser.length === 1) {
            const allTickets = await Tickets.find();
            const arrTickets = allTickets.find(user => user.tickets_id === tickets_id)
            const updateArrTickets = arrTickets.tickets.map(ticket => {
                if(ticket.ticket_id === parseInt(ticket_id)) {
                    return {...ticket, ...body}
                } else {
                    return ticket;
                }
            })
            const updateTicket = await Tickets.findOneAndUpdate({ tickets_id }, {$set: { tickets: updateArrTickets }}, {new: true});
            res.json(updateTicket);
        } else {
            return {
                type: "error",
                status: "404",
                message: "Invalid user_id"
            }
        }
    } catch (error) {
        console.log(error)
    }
});

router.delete('/:user_id', async (req, res ) => {
    const { user_id } = req.params;
    
    try {
        await User.findOneAndDelete({user_id})
        const newUsers = await User.find();
        res.json(newUsers);
    } catch (error) {
        console.log(error)
    }
});

router.delete('/:user_id/:tickets_id/:ticket_id', async (req, res) => {
    const { user_id, tickets_id, ticket_id } = req.params;
    const body = req.body;
    
    try {
        const users = await User.find();
        const getUser = users.filter(user => user.user_id === user_id);
        if(getUser.length === 1) {
            const allTickets = await Tickets.find();
            const arrTickets = allTickets.find(user => user.tickets_id === tickets_id)
            const deleteTicket = arrTickets.tickets.filter(ticket => ticket.ticket_id !== parseInt(ticket_id))
            const updateTicket = await Tickets.findOneAndUpdate({ tickets_id }, {$set: { tickets: deleteTicket }}, {new: true});
            res.json(updateTicket);
        } else {
            return {
                type: "error",
                status: "404",
                message: "Invalid user_id"
            }
        }
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;