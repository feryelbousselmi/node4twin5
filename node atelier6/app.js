const express=require("express");
const http =require("http");
var path=require("path");
const { disconnect } = require("process");
const router=require("./routes/chat.js")

var app=express();
//pour voir les fichiers twig dans un dossier views 
app.set("views" , path.join(__dirname,"views"));
app.set("view engine","twig");
app.use('/chat',router);

const server=http.createServer(app);
const io= require("socket.io")(server);

io.on("connection", (socket)=> {
    console.log ('User Connected');
    //io : cote server
    io.emit("msg","A new user is connected");
    //socket.emit("msg","A new user is connected");
    socket.on("msg",(data)=>{
        io.emit("msg",data)
    }
    );
    //when disconnect
    socket.on('disconnect',()=>{
        console.log ('User disconnected');
    
      io.emit("msg","A new user is disconnected");
    })
    });
 

server.listen(3000,()=> console.log("server is run "));