var express = require("express"); 
var app = express();
app.use(express.static('public'));
var http = require("http").createServer(app);
var https = require("https");
var io = require("socket.io")(http);
const {joinUser, removeUser} = require('./users');
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
let thisRoom = "";
var users_list=[];
var users_count=0;

io.on("connection", function (socket) {
  //Création du chat room
  console.log("Connexion supplémentaire detectée : "+socket.id);
  //Code executé lorsque l'on rejoint un chat room
  socket.on("Server Connection", (data) => {
    //users_list[users_count]=data;
    users_list.push(data.username);
    users_count+=1;
    console.log("Liste actuelle des utilisateurs : "+users_list);
    console.log("Taille liste actuelle des utilisateurs : "+users_list.length);
    io.emit("user_list_sent",users_list);
  });
  socket.on("connection_to_user", (data_sent) => {
      console.log("Connexion entre "+data_sent.user_to_connect+" et "+data_sent.actual_user+" en cours");
      thisRoom=data_sent.user_to_connect+"_"+data_sent.actual_user;
      //console.log("Liste des sockets "+io.sockets.sockets.size);
      io.emit("connection_time", {
        first_user: data_sent.actual_user,
        second_user: data_sent.user_to_connect 
      })
  });
  socket.on("join room", (data) => {
    console.log('in room : '+ thisRoom);
    let Newuser = joinUser(socket.id, data.username,thisRoom)
    //io.to(Newuser.roomname).emit('send data' , {username : Newuser.username,roomname : Newuser.roomname, id : socket.id})
   // io.to(socket.id).emit('send data' , {id : socket.id ,username:Newuser.username, roomname : Newuser.roomname });
   socket.emit('send data' , {id : socket.id ,username:Newuser.username, roomname : Newuser.roomname });
    console.log(Newuser);
    socket.join(Newuser.roomname);
  });
  socket.on("chat message", (data) => {
    io.to(thisRoom).emit("chat message", {data:data, id : socket.id});
  });
  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    console.log(user);
    if(user) {
      console.log(user.username + ' has left');
    }
    console.log("disconnected");

  });
});
http.listen(3005, function () {});
