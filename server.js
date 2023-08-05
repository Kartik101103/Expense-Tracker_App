const express = require("express");
const cors = require("cors");
const morgan  = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require('path');
const connectDB = require("./config/connectDB");
//config .env file
dotenv.config();
connectDB();
const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use('/api/v1/users',require('./routes/userRoute'));
//transaction reoutes
app.use('/api/v1/transections' , require("./routes/transactionRoute"));
//static fikes
app.use(express.static(path.join(__dirname,'./client/build')))
app.get('*' , function(req,res){
    res.sendFile(path.join(__dirname , './client/build/index.html'));
})
//port
const PORT = 8080 || process.env.PORT;
//listen
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});