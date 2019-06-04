const express = require('express')
const path = require('path')
const knex = require('knex')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const index = require('./app/routes/index');
const db =  knex({
    client :'pg',
    connection:{
    connectionString: process.env.DATABASE_URL,
    ssl:true,
    
    }
});

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',index);
app.listen(PORT)