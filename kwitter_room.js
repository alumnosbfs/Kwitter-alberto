
var  firebaseConfig = {
  apiKey: "AIzaSyB8vz4af-uNY8y3y09VANOZsVAyJKqUDHE",
  authDomain: "nombre-556fe.firebaseapp.com",
  databaseURL: "https://nombre-556fe-default-rtdb.firebaseio.com",
  projectId: "nombre-556fe",
  storageBucket: "nombre-556fe.appspot.com",
  messagingSenderId: "57745040269",
  appId: "1:57745040269:web:ffe6004f1cb869cb4fd3c4"
};
    
   
   firebase.initializeApp(firebaseConfig);




   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");


 document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";



 function addRoom() {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
    
      localStorage.setItem("room_name", room_name);

      window.location.replace("kwitter_page.html");
    
    }



function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

   

      console.log("Room Name - " + Room_names);
row = "<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;


      });});}

  //Cambiar Get Data por Get Room

getRoom();




function redirectToRoomName(Room_names) {
  console.log(Room_names);
  localStorage.setItem("room_name", Room_names);
  window.location = "kwitter_page.html";
}

//agregar funcion Logout
function logout() {
  
}