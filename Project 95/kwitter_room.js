var firebaseConfig = {
      apiKey: "AIzaSyBfeiSsjqlSpX1LAX8Sc7EPFiExN3i-o5Y",
      authDomain: "kwitter-website-b8b53.firebaseapp.com",
      projectId: "kwitter-website-b8b53",
      storageBucket: "kwitter-website-b8b53.appspot.com",
      messagingSenderId: "380102429271",
      appId: "1:380102429271:web:784737ec5f86b59ce57112",
      measurementId: "G-8QH25PM207"
    };
    
     firebase. initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room Name - " +  Room_names);
      row = "<div = class='room_name'  id="+Room_names+"  onclick='redirectToRoomName(this.id)'  >#" + Room_names +"</div><hr>";
      document.getElementbyId("output").innerHTML +=row;
      
      });});}
getData();

function addRoom()
{
      room_name = getElementbyId("room_name").value;


      firebase.database().ref("/").child(room_name).update({
            purpose : "adding new room"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "kwitter.html";
}


function send() {

      msg = document.getElementbyId("msg").value;
      firebase.database().ref(room_name).push({
  
            name:user_name,
            message:msg,
            like:0
      });
  
      document.getElementbyId("msg").value = "";
  }
