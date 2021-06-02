const express = require("express")
const server = express()

server.get('/', (resquet, response) => {
    return response.send("OIE!!!")
})

server.listen(3000, () => console.log("rodando"))