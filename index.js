const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;
const API_KEY = process.env.OPENAI_API_KEY;

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
    console.log(`API_KEY: ${API_KEY}`)
})


