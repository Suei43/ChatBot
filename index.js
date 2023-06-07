const express = require('express');
require('dotenv').config();
const openai = require("openai");
const axios = require("axios");

const payload = {};
const headers = {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
};

const instance = axios.create({
    baseURL: 'https://api.openai.com/v1/engines/davinci/completions',
    headers: headers,
    timeout: 2000,
});

instance.post('/', payload).then((res) => {
    console.log(res.data);
}).catch((err) => {
    console.error(err);
});

const port = process.env.PORT || 3000;
const API_KEY = process.env.OPENAI_API_KEY;

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
    console.log(`API_KEY: ${API_KEY}`)
})


