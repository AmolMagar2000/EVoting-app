import React, { useRef, useState, useEffect } from "react";
import { Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from "styled-components";

import { saveSample } from "../services/SignUpApi";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,20}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,20}$/;


export const SignUp = (props) => {



  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [vid, setVid] = useState('');
  const [isModalOpened, setIsModalOpened] = useState(false);
  

  const openModal = () => {
    setIsModalOpened(true);
  }
  const closeModal = () => {
    setIsModalOpened(false);

  }

  async function getAllSample() {
    const response = await saveSample();
   
  }
  

//   useEffect(() => {
//     getAllSamples();
// }, []);


    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(email);
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
                placeholder="Enter Full Name" />

              <label htmlFor="vid">Enter Voter ID</label>
              <input value={vid}
                name="vid"
                onChange={(event) => setVid(event.target.value)}
                id="vid"
                placeholder="Enter Voter ID" />

              <label for="select">Choose a Voting Center:</label>
              <select name="select" id="select">
                <option value="Mumbai-1">Mumbai Area 1</option>
                <option value="Mumbai-2">Mumbai Area 2</option>
                <option value="Mumbai-3">Mumbai Area 3</option>
                <option value="Mumbai-4">Mumbai Area 4</option>
              </select>


              <label htmlFor="email">Enter Email</label>
              <input value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="youremail@gmail.com"
                id="email"
                name="email" />

              <label htmlFor="password">Enter Password</label>
              <input value={pass}
                onChange={(event) => setPass(event.target.value)}
                type="password"
                placeholder="********"
                id="password"
                name="password" />
              <br></br>
              <button type="submit">Sign Up</button>

            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            {/* <LinkContainer to={"/sign-in"} className="link-btn">
            <Nav.Link>Already have an account? Login here. </Nav.Link>
          </LinkContainer> */}
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