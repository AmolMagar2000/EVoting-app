// import './nav.css';
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";

export function Navigationbar() {
  return (

    <>
      <Navcss>
        <section>
          <nav className="nav">

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
              <LinkContainer to={"/ "} className="links">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to={"/castevote"} className="links">
                <Nav.Link>CastVote</Nav.Link>
              </LinkContainer> */}
              <LinkContainer to={"/result"} className="links">
                <Nav.Link>Results</Nav.Link>
              </LinkContainer>

              <LinkContainer to={"/parties"} className="links">
                <Nav.Link>Parties</Nav.Link>
              </LinkContainer>

              {/* <LinkContainer to={"/user"} className="links">
                <Nav.Link>User Page</Nav.Link>
              </LinkContainer> */}

              <LinkContainer to={"/feedback"} className="links">
                <Nav.Link>Feedback</Nav.Link>
              </LinkContainer>


            </div>
          </nav>
        </section>
      </Navcss>
    </>


  )
}

const Navcss = styled.nav`
  .nav {
  width: 100%;
  height: 15vh;
  background: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-transform: uppercase;
  overflow: hidden;

}

.links {
  width: 25%;
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.logo {
  width: 25%;
  display: flex;
  text-align: center;
  font-size: 20px;

}

.menu {
  width: 40%;
  display: flex;
  justify-content: space-around;

}



#e {
  color: orange;
  font-size: 30px;
}

#v {
  color: white;
  font-size: 30px;
}

#i {
  color: greenyellow;
  font-size: 30px;
}

@media screen and (max-width: 600px) {
  .menu a:not(:first-child) {
      display: none;
  }

  .menu a.icon {
      float: right;
      display: block;
  }
}

@media screen and (max-width: 600px) {
  .menu.responsive {
      position: relative;
  }

  .menu.responsive a.icon {
      position: absolute;
      right: 0;
      top: 0;
  }

  .menu.responsive a {
      float: none;
      display: block;
      text-align: left;
  }

}`;
