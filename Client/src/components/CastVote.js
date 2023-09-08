
import styled from "styled-components";
import { useState } from "react";
// import { FaVoteYea } from "react-icons/fa";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
// import { getVoterID } from "../services/SignUpApi";
export function CastVote() {
    const [VoterID, setvid] = useState('')
    const [Parties_Name, setVote] = useState('')



    const onSubmit = () => {
        axios.post('http://localhost:5500/vote', {
            VoterID: VoterID,
            Parties_Name: Parties_Name

        }).then(() => {
            alert('Thanks for Voting Sucessfully')
        })
    }


    return (
        <>
            <CastCss>
                <section className="body1">
                    {/* <body class="body1">  */}
                    <div className="container">
                        <div className="heading">VOTE FOR FUTURE</div>
                        <form name="forms" >
                            <div className="card-details">
                                <div className="card-box">
                                    <span className="details">Voter Id</span>
                                    <input
                                        type="text" name="VoterID"
                                        placeholder="Enter your voter Id"
                                        required=""
                                        onChange={(event) => setvid(event.target.value)}
                                    />

                                </div>
                            </div>
                            <div className="circal-form">


                                <div className="form-check">
                                    <span
                                        className="fa-2x fas fa-vote-yea"
                                    >
                                        {" "}
                                    </span>{" "}
                                    <u className=" fa-2x fa-duotone fa-font-case" id="cast">Cast Your Vote</u>{" "}
                                    <h4 id="cv" style={{ color: "red" }} />
                                    <br />

                                    <input className="input" type="radio" value="BhartiyaJanataParty" name="Parties_Name" id="Radio" onChange={(event) => setVote(event.target.value)} />
                                    <i>
                                        {" "}
                                        Bhartiya janata party{" "}
                                        <img
                                            src="bjp.png"
                                            width="50px"
                                            height="50px"
                                            style={{ verticalAlign: "middle", margin: "0px 50px" }}
                                        />
                                    </i>
                                    <br />
                                    <br />
                                    <input className="input" type="radio" value="IndianNationalCongress" name="Parties_Name" id="Radio" onChange={(event) => setVote(event.target.value)} />{" "}
                                    <i>
                                        {" "}
                                        Indian National Congress{" "}
                                        <img
                                            src="congress.png"
                                            width="50px"
                                            height="50px"
                                            style={{ verticalAlign: "middle", margin: "0px 15px" }}
                                        />
                                    </i>
                                    <br />
                                    <br />
                                    <input className="input" type="radio" value="AamAdmiParty" name="Parties_Name" id="Radio" onChange={(event) => setVote(event.target.value)} />
                                    <i>
                                        {" "}
                                        Aam Aadmi Party{" "}
                                        <img
                                            src="AAP.webp"
                                            width="50px"
                                            height="50px"
                                            style={{ verticalAlign: "middle", margin: "0px 80px" }}
                                        />
                                    </i>
                                    <br />
                                    <br />
                                    <input className="input" type="radio" value="CommunistPartyofIndia" name="Parties_Name" id="Radio" onChange={(event) => setVote(event.target.value)} />{" "}
                                    <i>
                                        {" "}
                                        Communist Party of India{" "}
                                        <img
                                            src="cpi.jpg"
                                            width="50px"
                                            height="50px"
                                            style={{ verticalAlign: "middle", margin: "0px 13px" }}
                                        />
                                    </i>
                                </div>
                                <br />
                            </div>
                            <div className="button">

                                <LinkContainer to={"/result"} className="link-btn">
                                    <Nav.Link> <button type="submit" onClick={onSubmit}>Submit</button> </Nav.Link>
                                </LinkContainer>
                            </div>
                        </form>
                    </div>
                    {/* </body>  */}
                </section>
            </CastCss>
        </>

    )

}

const CastCss = styled.section`

.body1{
    color: aliceblue;
    display: flex;
    height: 145vh;
    justify-content: center;
    // align-items: center;
    background:linear-gradient( #c55b09, #fff,green);
    background-repeat: no-repeat;
    background-size:cover; 
    padding: 10px;
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.container{
    max-width: 84% ;
    height:70%;
    width: 40%;
    padding: 100px 100px;
    border-radius: 25px;
    background: linear-gradient(135deg,#f57c00 ,#1edc2c);
    
}
.container .heading{
    font-size: 30px;
    font-weight: 500;
    position: relative;
    text-align: center;
    padding: 0 0 20px 0;
    color:black;
    font-style:italic;
}
.container .heading::before{
    content: '';
    position: absolute;
    height: 3px;
    left: 0;
    bottom: 0;
    width: 100%;
    background: linear-gradient(135deg ,#71b7e6,#9b5b);

}
.container form .card-details{
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size:20px;
    color:black;
}
form .card-details .card-box{
    width: calc(100% / 2-20px);
    margin-bottom: 15px;
}

.card-details .card-box input{
    height:45px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 15px;
    font-size: 16px;

}

form .circal-form .circal-title{
    font-size: 20px;
    font-weight: 500;
    // border-bottom: 2px solid;
    color:black;
   
}
form .circal-form .category{
    margin-top: 10px;
    margin-bottom: 10px;
    
}
option{ 
    margin-right: 175px;
    margin-top: 6px; 
    font-weight: 500;
    font-size: 16px;
    color:black;
}
.select{
    width: 100%;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #ccc;
    color:black;
    
} 
#cast{
    color:black;
}
form .button{
    text-align: center;
}
form .button button{
    padding: 10px;
    margin-top: 10px;
    height: 100%;
    width: 50%;
    outline: none;
    color:#fff;
    border: none;
    font-size: 18px;
    font-weight: 500;
    border-radius: 5px;
    letter-spacing: 1px;
    background: linear-gradient(135deg,#05073a ,#dc0606ca);
}
form .button input:hover{
    color: #05073a;
}


@media (max-width:584px){
    .container{
        max-width: 100%;

    }
  
    form .circal-form .category{
        width: 100%;    
        
    }
    .container form .card-details{
        max-height: 300px;
        overflow: scroll;
    }
    .card-details::-webkit-scrollbar{
        width: 0;
    }
}
.form-check{
    font-size: 20px;
}




`;