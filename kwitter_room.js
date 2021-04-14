
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD-rjbWDTr8poEKQmHpaLtYt4px4PnpYSc",
    authDomain: "kwitter-pro-ff02f.firebaseapp.com",
    projectId: "kwitter-pro-ff02f",
    storageBucket: "kwitter-pro-ff02f.appspot.com",
    messagingSenderId: "300390571298",
    appId: "1:300390571298:web:fe15650ff6bdc89d4a597b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function addRoom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
 });
 localStorage.setItem("room_name" , room_name);
 window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToTheRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToTheRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.locatiom = "kwitter_page.html";
}
function logout (){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}