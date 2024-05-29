const express = require("express");
const connectDB = require("./db/connect");
require('dotenv').config();
const app = express();
const route = require("./routes/routes");
const PORT = 3000;

app.use(express.json());

app.get('/hello', (req,res)=>{
    res.send("Task manager");
});

app.use('/api/v1/tasks', route);


const start = async () => {
    try{
        await connectDB(process.env.MONGOOSE_URI);
        app.listen(PORT, ()=>{
            console.log(`Server running at ${PORT} Port`);
        })
    }catch(err){
        console.log(err);
    }
}
start()