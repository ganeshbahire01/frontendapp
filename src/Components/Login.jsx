import React from "react";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  const HandelSubmit = () => {
    const payload = {
      pass,
      email,
    };
    let req = fetch("https://fair-red-agouti-ring.cyclic.app/users/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => localStorage.setItem("token", data.token))
      .catch((err) => console.log(err));
    // console.log(req);
    alert("login success");
  };
  return (
    <div>
      <label style={{ display: "block" }}>Email </label>
      <input
        type="email"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label style={{ display: "block" }}>Password </label>
      <input
        type="password"
        value={pass}
        placeholder="password"
        onChange={(e) => setPass(e.target.value)}
      />
      <label style={{ display: "block" }}>Login </label>

      <button onClick={HandelSubmit}>Register</button>
    </div>
  );
};

export default Login;
