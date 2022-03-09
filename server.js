require('dotenv').config({path:'./config.env'});
const express = require('express');
const connectDb = require('./config/db');
const postRoutes = require('./routes/postRoutes');

connectDb();

const app = express();

app.use(express.json());

app.use(`/api/v1/posts`,postRoutes);

const PORT = process.env.PORT;
app.listen(PORT,()=> console.log(`server running on port ${PORT}`));
