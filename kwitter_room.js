// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDKGFmS-E12GCxyTHo1HHnGvNOUrxd5jbs",
    authDomain: "kwitter-33fbc.firebaseapp.com",
    databaseURL: "https://kwitter-33fbc-default-rtdb.firebaseio.com",
    projectId: "kwitter-33fbc",
    storageBucket: "kwitter-33fbc.appspot.com",
    messagingSenderId: "255724635326",
    appId: "1:255724635326:web:9f2e5d4225cc92d2ea8aef",
    measurementId: "G-Y0JDMY5QEF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();


user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";



function addRoom(){
  room_name= document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name",room_name);

  window.location = "kwitter_page.html";
}





function getData() {firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      
      console.log("Room Name -"+ Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location= "kwitter_page.html"; 
}

function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");

 window.location= "index.html";
}
