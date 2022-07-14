const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    ticket_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    document: {
        type: String,
        required: true
    },
    identification: {
        type: String,
        required: true
    }
}, {
    versionKey: false
});

const ticketsSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    tickets_id: {
        type: String,
        required: true
    },
    tickets: {
        type: Array,
        require: true,
    }
}, {
    versionKey: false
})

const Ticket = mongoose.model('Ticket', ticketSchema)
const Tickets = mongoose.model('Tickets', ticketsSchema);

module.exports = { Ticket, Tickets };