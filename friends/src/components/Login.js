import React, {useState} from "react";
import axios from "axios";

const Login = (props) => {
  const [credentials, setCredentials] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
      });
    };

  const handleLogin = e => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        // redirect the user to the app's main logged in page
        props.history.push("/protected");
      }, 300)
      .catch(err => {
        console.log(err);
        setIsLoading(false);
        setError("Invalid credentials.");
      });
      setCredentials({});
  };

    return (
      <div>
        <h1>Log In</h1>
        <p>{`Admin: username: Lambda School password:i<3Lambd4`}</p>
        <h3>{error}</h3>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <form onSubmit={handleLogin}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <br/>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <br/>
          <button>Log in</button>
        </form>
        )} 
      </div>
    );
}

export default Login;
