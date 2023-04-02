// const path=require("path")
const express = require('express');
// const handlebars = require('express-handlebars')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const controller = require("./Controllers/Chat_controller");
const router = require("./routes/index_router");
const io = new Server(server);

app.use(express.static("public"))

// app.engine('handlebars', handlebars.engine());
// app.set('view engine', 'handlebars');
// app.set('views', "./views");

router(app)

io.on('connection', (socket) => {
  socket.on('Chat', ([data,id]) => {
    io.emit("Chat",[data,id])
})
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});