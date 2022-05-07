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
  firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}