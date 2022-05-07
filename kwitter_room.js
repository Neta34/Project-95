
const firebaseConfig = {
      apiKey: "AIzaSyBSNNEPnpeMEMk2ONYd_MOw6e4di-mP0ws",
      authDomain: "kwitter-c4930.firebaseapp.com",
      databaseURL: "https://kwitter-c4930-default-rtdb.firebaseio.com",
      projectId: "kwitter-c4930",
      storageBucket: "kwitter-c4930.appspot.com",
      messagingSenderId: "857107076817",
      appId: "1:857107076817:web:39f57c373d5ccc355417f0"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("Room name - " + Room_names);
     row = "div class='room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
     document.getElementById("output").innerHTML += row;
     //End code
     });});}
getData();

function addRoom() 
{ room_name = document.getElementById("room_name").value; 
firebase.database().ref("/").child(room_name).update
({ purpose: "adding room name" }); 
localStorage.setItem("room_name", room_name); 
window.location = "kwitter_page.html"; }

function redirectToRoomName(){
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.htlm";
}

