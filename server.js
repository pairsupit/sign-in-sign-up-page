const express = require('express');
const app = express();
app.use(express.json());

var admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(`8080`,()=>{
    console.log('port is running on 8080');
})