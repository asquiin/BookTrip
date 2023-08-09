const express = require('express')
const cors = require('cors');

const reservationRouter = require('./routes/reservation.routes')

const PORT = process.env.PORT || 8080

const app=express()
app.use(cors());

app.use(express.json())
app.use('/api', reservationRouter)
app.listen(PORT, ()=> console.log(`server started on port ${PORT}`))