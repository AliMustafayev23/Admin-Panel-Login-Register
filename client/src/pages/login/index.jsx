import React from "react";
import LoginForm from "./login form";
import LoginPhoto from "./login photo";

const Login = () => {
  function reveal() {
    var container2 = document.querySelectorAll(".container2");
    for (var i = 0; i < container2.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = container2[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        container2[i].classList.add("active");
      } else {
        container2[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  return (
    <div>
      <LoginPhoto />
      <LoginForm />
    </div>
  );
};

export default Login;
