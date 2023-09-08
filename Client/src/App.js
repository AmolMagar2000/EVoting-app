import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Home } from "./components/Home";
import { CastVote } from "./components/CastVote";
import { Parties } from "./components/Parties";
import { Feedback } from "./components/Feedback";
import { Navigationbar } from "./components/Navigationbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "./components/UserPage";
import { Results } from "./components/Results";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <BrowserRouter>
      <Navigationbar></Navigationbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/sign-up" element={<p className="section App" >
          {currentForm === "login" ? <SignIn onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />}
        </p>}></Route>
        {/* <Route path="/sign-in" element={<SignIn></SignIn>}></Route> */}
        <Route path="/feedback" element={<Feedback></Feedback>}></Route>
        <Route path="/castevote" element={<CastVote></CastVote>}></Route>
        <Route path="/parties" element={<Parties></Parties>}></Route>
        <Route path="/admin" element={<UserPage></UserPage>}></Route>
        <Route path="/result" element={<Results></Results>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </BrowserRouter>


  );
}

export default App;