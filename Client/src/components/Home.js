import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { SignUp } from './SignUp';

export function Home() {
  return (

    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="index.css" />
      <link rel="stylesheet" href="google font link (jos wala koi to )" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
      />
      <title>Document</title>
      <link rel="icon" type="image/x-icon" href="fav.webp" />
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      />
      {/* <nav>
    <div className="logo">
      <h1>
        <div>
          <b id="e">Right&nbsp;</b>
          <b id="v">2&nbsp;</b>
          <b id="i">Vote</b>
        </div>
      </h1>
    </div>
    <div className="menu">
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Parties </a>
      <a href="#">Results </a>
      <a href="#">Feedback</a>
    </div>
  </nav> */}
      <header>
        <main>
          <section>
            <h3>Welcome to Online Voting Platform</h3>
            <h1>
              Time for change - <span className="change_content"> </span>
            </h1>
            <p className="animated infinite heartBeat">
              <center>
                <LinkContainer to={"/sign-up"} className="btntwo">
                  <Nav.Link>Vote Here</Nav.Link>
                </LinkContainer>
              </center>

            </p>
          </section>
        </main>
      </header>

      <div className="mycontainer">
        <h1>Why Choose Us?</h1>
        <p>Right2Vote is the best eVoting software due to following reasons</p>
      </div>
      <div className="rows">
        <div className="cards">
          <a href="#">
            <img src="certified.png" />
          </a>
          <h2>Govt. of India Certified and Approved</h2>
          <p>
            Right2Vote's eVoting platform is tested and certified by Standardization
            Testing and Quality Certification (STQC) Directorate under Ministry of
            Electronics and Information Technology (MeiTY), Government of India. It
            is also approved by the Ministry of Corporate Affairs (MCA), Government
            of India. Check out the certificates here.
          </p>
        </div>
        <div className="cards">
          <a href="#">
            <img src="secured.png" style={{ width: 70 }} />
          </a>
          <br />
          <h2>100% Secure</h2>
          <br />
          <p>
            {" "}
            Right2Vote's online voting system has many layers of security making the
            platform 100% secure. Security features include encryption,
            authentication based on OTP, Aadhaar, Biometric. Features like voter
            selfie, double authentication, audit trail, voter receipt and much more.
          </p>
        </div>
        <div className="cards">
          <a href="#">
            <img src="easy-to-use.png" style={{ width: 70 }} />
          </a>
          <br />
          <h2>Easy to use</h2>
          <br />
          <p>
            Right2Vote's mobile election system is very user friendly and voting can
            be done anytime and from anywhere within seconds. Voting can be done via
            mobile browser, website, android app or iOS app. Check the demo video
            here.
          </p>
        </div>
      </div>

      <footer>
        <center>
          <div className="sociallogo" id="aboutUs">
            <a href="https://www.facebook.com">
              <i className="fab fa-facebook fa-2x" />{" "}
            </a>
            <a href="https://www.instagram.com">
              <i className="fab fa-instagram fa-2x" />
            </a>
            <a href="https://www.twitter.com">
              <i className="fab fa-twitter fa-2x" />
            </a>
            <a href="https://www.linkedin.com">
              <i className="fab fa-linkedin fa-2x" />
            </a>
          </div>
          <address>
            <br />
            <h4>Contact</h4>
            " Cdac-Mumbai,Maharashtra "<br />
            <br />
            voting@gmail.com
            <br />
            support@vote.com
            <br />
            999XXXXXX
          </address>{" "}
          <br />© Copyright 2021 by XXX. All Right Reserved
        </center>
      </footer>
    </>


  );
}