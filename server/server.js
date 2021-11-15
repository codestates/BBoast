const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/hello', (req, res) => {
    res.send({ hello : 'bb hello' });
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})