const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'application/json');
    res.status(200);

// res.send(JSON.stringify((sc));

    res.send(JSON.stringify({ name: "John Joe", status:"200"}) );
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});