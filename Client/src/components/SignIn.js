
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";



export const SignIn = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loginStatus, setLoginStatus] = useState([]); 
    

    const login = () => {
        axios.get("http://localhost:5500/details").then((res) => {
            setLoginStatus(res.data);
        })
    }



    // const login = async () => {
    //     try{
    //         await axios.post('http://localhost:5800/sample', {
    //             email: email,
    //             pass: pass,
    //         }).then((response) => {
    //             if (response.data.message) {
    //                             setLoginStatus(response.data.message)
    //                         } else {
    //                             setLoginStatus(response.data[0].email)
    //                         }
    //         })

    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }
    

    // const login = () => {
    //     axios.post('http://localhost:5800/login', {
    //         email: email,
    //         pass:pass
    //     }).then((response) => {

    //         if (response.data.message) {
    //             setLoginStatus(response.data.message)
    //         } else {
    //             setLoginStatus(response.data[0].email)
    //         }
    //     })
    // }






    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(email);
        // if (loginStatus.map.email.data=== email) {
        //     console.log("Sucess")
        // } else {
        //     console.log("Unsucess");
        // }
    }

    return (
        <CssSignIn>
            <section>

                <div className="auth-form-container">
                    <form className="login-form" onSubmit={handleSubmit} >
                        <h2>Sign In</h2>
                        <label htmlFor="email">Enter E-mail</label>
                        <input value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
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
                            name="password" /><br></br>

                        <button type="submit" onClick={login}>Sign In </button>

                        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
                        {/* <LinkContainer to={"/sign-up"} className="link-btn">
                            <Nav.Link>Don't have an account? Register here </Nav.Link>
                        </LinkContainer> */}
                    </form>
                    <h1>{loginStatus}</h1>
                </div>
            </section>
        </CssSignIn>
    );

}


const CssSignIn = styled.div` 
section {
    text-align: center;
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    color: black;
    background:linear-gradient( #c55b09, #fff, green);
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
  
  input {
    margin: 0.3rem 0;
    padding: 0.6rem;
    border: none;
    border-radius: 10px;
    background:rgba(201, 76, 76, 0.3);
  }
  
  button {
    border: button 1;
    background-color:	#D3D3D3;
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