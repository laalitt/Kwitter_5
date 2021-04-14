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
  
  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0});
document.getElelementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";

span_with_tag = "span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";


row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML +=row;
} });  }); }
getData();
function updateLike(message_id){
console.log("clicked on like button -" + message_id);
button_id = message_id
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);


firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
});
};

function logout (){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
