import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
//import { saveSample } from "../services/SignUpApi";




export const SignUp = (props) => {



  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [vid, setVid] = useState('');
  const [vc, setVc] = useState('');

  const [error, setErr] = useState(false);


  const onSubmit = () => {

    axios.post('http://localhost:5500/sample', {
      name: name,
      vid: vid,
      vc: vc,
      email: email,
      pass: pass,

    }).then(() => {
      alert('Registraion Sucessfull')
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length === 0) {
      setErr(true)
    }
    console.log(name);
    if (email.length === 0) {
      setErr(true)
    }
    if (vid.length === 0) {
      setErr(true)
    }
    if (pass.length === 0) {
      setErr(true)
    }

  }



  return (
    <CssSignup>
      <section>
        <div className="auth-form-container">
          <h2>SignUp</h2>
          <form className="register-form" onSubmit={handleSubmit}>

            <label htmlFor="name">Enter Full name</label>
            <input value={name} name="name"
              onChange={(event) => setName(event.target.value)}
              id="name"
              placeholder="Enter Full Name"
            />
            { /*Error message*/}
            {error && name.length <= 0 ?
              <label>Name is required!</label> : ""}

            <label htmlFor="vid">Enter Voter ID</label>
            <input value={vid}
              name="vid"
              onChange={(event) => setVid(event.target.value)}
              id="vid"
              placeholder="Enter Voter ID" />
            { /*Error message*/}
            {error && vid.length <= 0 ?
              <label>Voter ID is required!</label> : ""}

            <label for="select">Choose a Voting Center:</label>
            <select name="select" id="select"
              onChange={(event) => setVc(event.target.value)}>
              <option value="Mumbai-1">Mumbai Area 1</option>
              <option value="Mumbai-2">Mumbai Area 2</option>
              <option value="Mumbai-3">Mumbai Area 3</option>
              <option value="Mumbai-4">Mumbai Area 4</option>
            </select>
            { /*Error message*/}
            {error && vc.length <= 0 ?
              <label>Voting Center is required!</label> : ""}


            <label htmlFor="email">Enter Email</label>
            <input value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email" />
            { /*Error message*/}
            {error && email.length <= 0 ?
              <label>Email is required!</label> : ""}

            <label htmlFor="password">Enter Password</label>
            <input value={pass}
              onChange={(event) => setPass(event.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="pass" />
            { /*Error message*/}
            {error && pass.length <= 0 ?
              <label>Password can't be empty!</label> : ""}
            <br></br>


          </form>
          <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
          <LinkContainer to={"/castevote"} className="link-btn">
            <Nav.Link> <button type="submit" onClick={onSubmit}>Sign Up</button> </Nav.Link>
          </LinkContainer>
        </div>
      </section>
    </CssSignup>
  );
}


const CssSignup = styled.section` 
section {
    text-align: center;
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    color: black;
    background:linear-gradient( #c55b09, #fff,green);
  
  }
  
  .auth-form-container, .login-form, .register-form {
    display: flex;
    flex-direction: column;
  }
  
  @media screen and (min-width: 600px) {
    .auth-form-container {
      padding: 5rem;
      border: 1px solid black;
      border-radius: 10px;
      margin: 0.5rem;
    }
  }
  
  label {
    text-align: left;
    padding: 0.25rem 0;
  }
  
  input,select {
    margin: 0.3rem 0;
    padding: 0.6rem;
    border: none;
    border-radius: 10px;
    background:rgba(201, 76, 76, 0.3);
  }
  
  button {
    border: black 1;
    background-color: #D3D3D3;
    padding: 10px;
    border-radius: 50px;
    cursor: pointer;
    color: #7439db;
    font-size:20px
    
  }
  
  .link-btn {
    border:none;
    background: none;
    color: black;
    text-decoration: underline;
  }
`;