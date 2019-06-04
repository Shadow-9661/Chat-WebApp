const express = require("express");
const path = require("path");
const register = express.Router();
const bcrypt = require('bcrypt-nodejs');

const knex = require("knex");
const db = knex({
    client: "pg",
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true,
    }
});

register.post("/", (req, res) => {
    const { name, username, email, password } = req.body;
    const hash = bcrypt.hashSync(password);
    const joined = new Date();
    db.insert({
        hash: hash,
        email: email,
        name: name,
        username: username,
        created_on: joined,
        last_login: joined
    })
        .into("account")
        .then(
            res.send({
                msg: "Successfully registered"
            })
        )
        .catch(err => res.status(400).json("Error Unable to register"))
})


module.exports = register;
