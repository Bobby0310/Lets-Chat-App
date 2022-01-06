const firebaseConfig = {
  apiKey: "AIzaSyDkvhm1xfkOkAQrzYKlklB2MmOij4MsAlM",
  authDomain: "lets-chat-app-55786.firebaseapp.com",
  projectId: "lets-chat-app-55786",
  storageBucket: "lets-chat-app-55786.appspot.com",
  messagingSenderId: "51978682638",
  appId: "1:51978682638:web:e7e7416f7d03ed3138d75f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



document.getElementById("WelcomeTag").innerHTML= "Welcome"+ user_nam +"!";

function add(){
      RoomName= document.getElementById("Create_Room").value;
 
            purpose:"Adding Room Name"; 
            
      localStorage.setItem("Room",RoomName);
      window.location="Kwitter_page.html";
}

function logout(){
      window.location="1st_page_index.html "
}
