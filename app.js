const express = require('express');
const app = express();

app.use((req, res) => {
    res.status(200).json({
        message:'Node.Js is working'
    });
});

module.exports = app;