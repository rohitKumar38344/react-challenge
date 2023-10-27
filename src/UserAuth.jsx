import { useState } from "react";
import "./UserAuth.css";

const UserAuth = () => {
  const [login, setLogin] = useState(true);

  function handleOnClick(e) {
    // e.preventDefault();
    console.log("clicked");
    setLogin(!login);
  }
  return (
    <div className="container">
      <h2>Instagram</h2>
      {login ? (
        <SignIn changepage={handleOnClick} />
      ) : (
        <SignUp changepage={handleOnClick} />
      )}
    </div>
  );
};

const SignIn = ({ changepage }) => {
  return (
    <form action="#" method="post">
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="user-email"
          id="user-email"
          placeholder="Phone number, username or email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="user-password"
          id="user-password"
          placeholder="Password"
        />
      </div>
      <input type="submit" value="Log in" />
      <p>
        Don't have an account?{" "}
        <a href="#" onClick={changepage}>
          Sign up
        </a>
      </p>
    </form>
  );
};

const SignUp = ({ changepage }) => {
  return (
    <form action="#" method="post">
      <div>
        <label htmlFor="email">Email or Mobile Number</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Mobile Number or Email"
        />
      </div>
      <div>
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" id="name" placeholder="Full Name" />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <input type="submit" value="Sign up" />
      <p>
        Have an account?
        <a href="#" onClick={changepage}>
          Log in
        </a>
      </p>
    </form>
  );
};

export default UserAuth;
