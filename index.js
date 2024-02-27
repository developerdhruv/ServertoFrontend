const express = require('express');
const app = express();

const port  = 9000

app.get('/api/users', (req,res)=>{
    data = [{
        "name":"dhruv",
        "age": 19
    },

    {
        "name" : "kusum",        
        "age" : 30
    }


]
    res.send(data)
})

app.listen(port, ()=>{
    console.log("server chal rha hai!!")
})