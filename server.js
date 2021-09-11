const express = require('express');
const app = express();

app.use(express.json())

app.get('/homepage',(req,res) => {
    res.render('homepage');
})


app.listen(`8080`,()=>{
    console.log('port is running on 8080');
})