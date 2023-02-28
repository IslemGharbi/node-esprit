const express = require("express");
const http = require("http");
var path = require("path");
const chatRouter = require("./routes/chat.js")

var app = express();
app.set("Views", path.join(__dirname,"views"));
app.set("view engine","twig");
app.use('/chat',chatRouter);

const server = http.createServer(app);
const io = require("socket.io")(server);



io.on('connection', function(socket) {
    console.log ('User Connected..');
    io.emit("msg","A new user is connected");

    socket.on("msg",(data)=>{
        io.emit("msg",data);
    });
//socket client io server
    socket.on('disconnect', () => {
      
        console.log('Un utilisateur sest déconnecté !');
        io.emit("msg","a user has disconnect")
          });

    });


 





server.listen(3000,()=> console.log("server is running "));

