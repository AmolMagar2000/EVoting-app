import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,20}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,20}$/;

export const SignIn = (props) => {

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    
    const [pass, setPass] = useState('');
    const [validPass, setValidPass] = useState(false);
    const [passFocus, setPassFocus] = useState(false);

    const [matchPass, setMatchPass] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSucess] = useState(false);
 
    useEffect(() => {
        userRef.current.focus();
    }, [])
    
    useEffect(() => {
        const result = USER_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email])
    
    useEffect(() => {
        const result = PWD_REGEX.test(pass);
        console.log(result);
        console.log(pass);
        setValidPass(result);
        const match = pass === matchPass;
        setValidMatch(match);

    },[pass, matchPass])

    useEffect(() => {
        setErrMsg('');

    },[email,pass,matchPass])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
    }

    return (
        <CssSignIn>
            <section>
                {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive">{ errMsg }</p> */}
                <div className="auth-form-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h2>Sign In</h2>
                        <label htmlFor="email">Enter E-mail
                            {/* <span className={validEmail ? "valid" : "hide"}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validEmail || !email ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon={faTimes} /> */}
                            {/* </span> */}
                        </label>
                        <input value={email}
                            ref={userRef}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            // aria-invalid={validEmail ? "false" : "true"}
                            // aria-describdby="uidnote"
                            // onFocus={() => setEmailFocus(true)}
                            // onBlur={() => setEmailFocus(false)}
                            type="email"
                            placeholder="youremail@gmail.com"
                            id="email"
                            name="email" />
                        {/* <p id="uidnote" className={emailFocus && email && !validEmail ?
                            "instructions" : "offscreen"}>
                            4 to 24 characters <br></br>
                            Must Begin With Letters Only<br></br>
                            Letters,Number,Underscore,Hypens Allowed
                        </p> */}
                        

                        <label htmlFor="password">Enter Password</label>
                        <input value={pass}
                            onChange={(event) => setPass(event.target.value)}
                            type="password"
                            placeholder="********"
                            id="password"
                            name="password" /><br></br>
                        <button type="submit">Sign In </button>
                        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
                        {/* <LinkContainer to={"/sign-up"} className="link-btn">
                            <Nav.Link>Don't have an account? Register here </Nav.Link>
                        </LinkContainer> */}
                    </form>

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