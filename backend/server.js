const express = require('express')
const dotenv = require('dotenv')
const connectDB = require("./config/db")
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/auth')
const saloonRoutes = require('./routes/saloons')
const slotRoutes = require('./routes/slots')
const serviceRoutes = require('./routes/service')
const cookieParser = require('cookie-parser')
const cors=require('cors')


dotenv.config()
connectDB();
const app = express()
app.use(cors())

app.get('/',(req,res)=>{
    res.send("API is running")
})

app.use(cookieParser());
app.use(express.json());

app.use('/api/users',userRoutes);
app.use('/api/saloons',saloonRoutes);
app.use('/api/slots',slotRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/service',serviceRoutes);

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server started on ${PORT}`));
