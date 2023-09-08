// import './Form.css'
import styled from "styled-components";
export function Feedback() {
    return (
        <Formcss>
        <div className="body">
            <div className="container">
                <div className="title">Feedback form</div>
                <div className="content">
                    <form action="#" >
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    id="name"
                                    required=""
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    id="mail"
                                    required="" />
                            </div>
                            <div className="input-box">
                                <span className="details">Voter Id</span>
                                <input
                                    type="text"
                                    placeholder="Enter your voter Id"
                                    id="vid"
                                    required="" />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input
                                    type="text"
                                    placeholder="Enter your number"
                                    id="pno"
                                    required=""
                                    maxLength={10} />
                            </div>
                            <div className="input-box">
                                <span className="details">Feedback</span>
                                <textarea
                                    placeholder="Post your comments"
                                    id="comments"
                                    defaultValue={""} />
                            </div>
                        </div>
                        <div className="button">
                            <input type="submit" defaultValue="Send Feedback" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </Formcss>
        

    )
}

const Formcss = styled.body`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins',sans-serif;
}
.body{
  height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding: 10px;
  /* background:linear-gradient(135deg, #71b7e6, #9b59b6); */
  background:linear-gradient( #c55b09, #fff,green);
}
.container{
  max-width: 700px;
  width: 100%;
  /* background-color: #fff; */
  background:linear-gradient( #c55b09, #fff,green);
  padding: 25px 30px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}
.container .title{
  font-size: 25px;
  font-weight: 500;
  position: relative;
}
.container .title::before{
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  border-radius: 5px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}
.content form .user-details{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}
form .user-details .input-box{
  margin-bottom: 15px;
  width: calc(100% / 2 - 20px);
}
form .input-box span.details{
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}
.user-details .input-box input{
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}
.user-details .input-box input:focus,
.user-details .input-box input:valid{
  border-color: #9b59b6;
}

 form input[type="radio"]{
   display: none;
 }
 form .button{
   height: 45px;
   margin: 35px 0
 }
 form .button input{
    margin-left: 40%;
   height: 100%;
   width: 25%;
   border-radius: 10px;
   border: none;
   color: #fff;
   font-size: 18px;
   font-weight: 500;
   letter-spacing: 1px;
   cursor: pointer;
   transition: all 0.3s ease;
   /* background: linear-gradient(135deg, #71b7e6, #9b59b6); */
   background: linear-gradient( #2f44bafb,rgba(48, 48, 178, 0.992));
 }
 form .button input:hover{
  /* transform: scale(0.99); */
  background: linear-gradient( blue, blue);
  }
 @media(max-width: 584px){
 .container{
  max-width: 100%;
}
form .user-details .input-box{
    margin-bottom: 15px;
    width: 100%;
  }
  form .category{
    width: 100%;
  }
  .content form .user-details{
    max-height: 300px;
    overflow-y: scroll;
  }
  .user-details::-webkit-scrollbar{
    width: 5px;
  }
  }
  @media(max-width: 459px){
  .container .content .category{
    flex-direction: column;
  }
}

.user-details .input-box textarea{
    height: 200px;
    width: 212%;
    outline: none;
    font-size: 16px;
    border-radius: 5px;
    padding-left: 15px;
    border: 1px solid #ccc;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
  }
  `;