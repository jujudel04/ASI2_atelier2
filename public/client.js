let ID = "";
var socket = io();
let userName = prompt("whats your name");
//let room = prompt("room name");
var liste_actuelle_utilisateurs=[];
//const moment= require('moment');
//send event that user has joined room
socket.emit("Server Connection", {username : userName});
//socket.emit("join room", {username : userName, roomName : room});

//receive data from server.
socket.on('send data',(data)=>{
    ID = data.id; //ID will be used later
    console.log(" my ID:" + ID);
    })
$("#m").focus();
//when form is submitted, capture the input value and then send it to server
//console.log('Client-side code running');

//Réception et affichage de la liste des utilisateurs avec qui on peut communiquer
socket.on("user_list_sent",(data) => {
    console.log("Personnes connectées : "+liste_actuelle_utilisateurs);
    //Mise à jour de la liste des utilisateurs
    //Affiche les utilisateurs actuellement connectés sur le frontEnd (avec mise à jour à chaque nouvelle connexion)
    for (let i=0;i<data.length;i++) {
        console.log("Valeur de data[i] = "+liste_actuelle_utilisateurs);
        let essai=liste_actuelle_utilisateurs.indexOf(data[i].toString())==-1;
        console.log("Valeur de essai = "+essai)
        if(liste_actuelle_utilisateurs.indexOf(data[i])==-1) {
            console.log("Nouvelle valeur spotted");
            liste_actuelle_utilisateurs.push(data[i]);
            console.log("Utilisateur "+data[i]+" connecté");
            if (data[i]!=userName) {
            const newButtonUser=document.createElement("button")
            newButtonUser.setAttribute("id",data[i]);
            newButtonUser.setAttribute("name","connect_to_user")
            newButtonUser.innerHTML=data[i];
            newButtonUser.addEventListener('click', function(event) {
                event.preventDefault();
                socket.emit("connection_to_user", {
                    actual_user: userName,
                    user_to_connect: data[i]
                });
                //socket.emit("join room", {username : userName, roomName : userName+"_"+data[i]});
            });
            document.getElementById("user_list_connected").appendChild(newButtonUser);
            }
        };
    };
});

socket.on("connection_time", (userConnect) => {
    if (userConnect.first_user==userName) {
        socket.emit("join room", {username : userName});
    };
    if (userConnect.second_user==userName) {
        socket.emit("join room", {username : userName});
    }
});

const button = document.getElementById('myButton');
button.addEventListener('click', function (event) {
    event.preventDefault();
    socket.emit("chat message", {
        value: document.getElementById("m").value,
        user: userName,
        });
        document.getElementById("m").value = "";
        });
    socket.on("chat message", (data) => {
    console.log(data.data.user + ": " + data.data.value);
    displayMessage(data);
        });

    function displayMessage(data) {
    let authorClass = "";
    //verify that the user ID and the message sent ID is similar 
    if (data.id === ID) {
        //console.log("This person has sent a message")
        authorClass = "me";
        } else {
        authorClass = data.data.user;
        }


//Affichage des bulles de conversation sur la partie client
    const newDiv = document.createElement("div");
    newDiv.className="ui raised segment"
    const newA = document.createElement("a");
    if (authorClass=== 'me') {
        newA.className="ui green right ribbon label";
    } else {
        newA.className="ui blue ribbon label";
    }
    newA.innerHTML=authorClass;
    const newSpan = document.createElement("span");
    newSpan.innerHTML = moment().format("hh:mm:ss");
    const newPara = document.createElement("p");
    newPara.innerHTML=data.data.value;
    newDiv.appendChild(newA);
    newDiv.appendChild(newSpan);
    newDiv.appendChild(newPara);
    //fin ajout
    document.getElementById("messages").appendChild(newDiv);
    //scroll to the bottom
    window.scrollTo(0, document.body.scrollHeight);
    }
