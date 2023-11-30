import { useContext, useState } from "react";
import { BooksContext } from "../../store/bookContext";
import { useNavigate } from "react-router-dom";

const USER = "john";
const PASS = "1234";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setLogin } = useContext(BooksContext);

  const handleLogin = (user, pass) => {
    if (user === USER && PASS === pass) {
      setLogin(true);
      navigate("/");
    } else {
      alert("Username or password is incorrect");
    }
  };

  return (
    <div className="">
      <div className="">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => handleLogin(username, password)}>Login</button>
      </div>
    </div>
  );
};

export default Login;
