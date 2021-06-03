const express = require("express")
const server = express()

//habilitar arquivos statics
server.use(express.static("public")); //middwewe 

server.get('/', (resquet, response) => {
    return response.sendFile(__dirname + "/views/index.html")
})

server.listen(3000, () => console.log("rodando"))