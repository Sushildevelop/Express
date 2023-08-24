const express = require('express'); // Imported and assigned 
const app = express(); // New instance
const port = 6700;
app.get('/', (req, res) => {
    res.send("Hello World");
})
app.get('/about', (req, res) => {
    res.send("Hello world About page")
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});