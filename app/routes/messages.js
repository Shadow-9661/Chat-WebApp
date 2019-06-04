const express = require('express');
const knex = require('knex');
const messages = express.Router();
const bcrypt = require('bcrypt-nodejs');
const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true,
    }
});

messages.post('/', (req, res) => {
    db.select('*').from('messages').where('receiver_id', '=', req.body.receiver_id)
        .then(data => {
            res.status(200).send(data)
        })
        .catch((err) => res.status(401).json('Wrong Credentials'))
})

sendMessage.post('/', (req, res) => {
    const { sender_id, receiver_id, msg_type, content } = req.body;
    const sent_on = new Date();
    db.insert({
        receiver_id: receiver_id,
        sender_id: sender_id,
        msg_type: msg_type,
        sent_on: sent_on,
        content: content
    })
        .into("chats")
        .then(res.status(200).json("Message sent !!"))
        .catch(err => {
            res.status(400).json(err)
        })
})
module.exports = sendMessage;
module.exports = messages;