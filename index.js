const express = require('express');
const app = express();
const cors = require('cors')



const port  = 9000


app.use(cors())


app.get('/api/users', (req,res)=>{
    data = [{
        "name":"xyz",
        "age": 19
    },

    {
        "name" : "abc",        
        "age" : 30
    }


]
    res.send(data)
})

app.listen(port, ()=>{
    console.log("server chal rha hai!!")
})
