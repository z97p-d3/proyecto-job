import express from 'express';

import mysql from 'mysql';
const myconn= require('express-myconnection')
const routes= require('./routes/routes')
const cors =require('cors')

let app = express();
app.set('port', process.env.PORT || 3001)
//conexion de la base de datos

const dbOptions={
    host:'localhost',
    port:3306,
    user:'root',
    password:'',
    database:'test-crud'
}
app.use(myconn(mysql,dbOptions,'single'))

app.use(express.json())
app.use(cors())
app.get('/', (req, res)=>[
    res.send('bienvenido a m api')
])

app.use('/api', routes)

//inicoi de servidor
app.listen(3001, function() {
    console.log('Example app listening on port 3001!')
});