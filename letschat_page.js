//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyC0gMwcQREagrZzo6U-Qukpd-QklFBm_fM",
    authDomain: "lets-chat-8efd2.firebaseapp.com",
    databaseURL: "https://lets-chat-8efd2-default-rtdb.firebaseio.com",
    projectId: "lets-chat-8efd2",
    storageBucket: "lets-chat-8efd2.appspot.com",
    messagingSenderId: "1024001182436",
    appId: "1:1024001182436:web:80b8841e4b24ac4ccd3af1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send() {
msg = document.getElementById("msg").value
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value = "";
}