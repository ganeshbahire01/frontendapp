import React from "react";
import axios from "axios";
const Register = () => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");

  const HandelSubmit = async () => {
    const payload = {
      name,
      pass,
      email,
      age,
    };
    try {
      //   let req = await axios.post(
      //     "https://fair-red-agouti-ring.cyclic.app/users/register",
      //     {
      //       payload,
      //     }
      //   );
      let req = await fetch(
        "https://fair-red-agouti-ring.cyclic.app/users/register",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      alert("Regist success");
    } catch (error) {}
  };
  return (
    <div style={{ display: "block" }}>
      <label style={{ display: "block" }}>Name </label>
      <input
        value={name}
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
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
      <label style={{ display: "block" }}>Age </label>
      <input
        type="number"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <label style={{ display: "block" }}>Register </label>

      <button onClick={HandelSubmit}>Register</button>
    </div>
  );
};

export default Register;
