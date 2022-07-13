const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    ticket_id: String,
    name: String,
    lastname: String,
    nationality: String,
    document: String,
    identification: String
});

const ticketsSchema = new Schema({
    _id: String,
    tickets_id: String,
    tickets: [ticketSchema]
})

const Ticket = mongoose.model('Ticket', ticketsSchema);

module.exports = Ticket;