const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./RecipeRoutes');
const cors = require('cors');
require ('dotenv').config();
mongoose.set("strictQuery", false);
const PORT = 4040 || process.env.port;

app.use(express.json())
app.use(cors())
mongoose
.connect(process.env.MONGODB_LINK)
.then(()=> console.log("Connected to MongoDB"))
.catch((err)=> console.log(err))
app.use(routes);
app.listen(PORT, ()=> {
    console.log(`App is listening at PORT ${PORT}`)
})