const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

//middlewar
app.use(cors())
app.use(express.json())


app.get('/', (req, res)=>{
    res.send('Simple CRUD server is serving')
})


app.listen(port,  ()=>{
    console.log(`Simple CRUD server is running on port ${port}`)
})