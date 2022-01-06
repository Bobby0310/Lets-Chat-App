function NewUser(){
      user_nam = document.getElementById("user_name").value ;
      localStorage.setItem("user_name" , user_nam);
      window.location = "2nd_page.html";
  }