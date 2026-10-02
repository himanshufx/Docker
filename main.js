const express = require('express')
const app = express();

const Port = process.env.PORT || 8000

app.get('/', (req, res) => {
    return res.json({ message: 'Hello Docker!'})
})

app.listen(Port, () => {
    console.log(`Server running on Port ${Port}`)
})