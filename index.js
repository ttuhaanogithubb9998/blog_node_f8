const express = require('express');
const app = express();
const port = 3000;

//route
app.get('/trang-chu', (req, res) => res.send("hello world"))

app.listen(port, ()=>console.log(`Example app listening at http://localhost:${port}`))
