
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import Home from "./Components/home";
import profile from "./Components/profile";
import "./App.css";
import {BrowserRouter, Routes, Route, Form} from 'react-router-dom'
import LoginForm from "./Components/index";
import YourComponent from "./Components/in-Play";
import PersonalInfoTable from "./Components/profile";
import Statement from "./Components/statement";
import Games from "./Components/games";
import ChangePassword from "./Components/change-password";
import MyLedger from "./Components/my-ledger";
import Rules from "./Components/rules";
import CompletedGames from "./Components/completed-games";
import HomePage from './Components/home'; 
import Match from './Components/match';   
import ManualGames from './Components/manual-games'; 
import Rendomepage from './Components/1807030';  
function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<LoginForm />} />
          <Route path="/in-Play" element={<YourComponent />} />
          <Route path="/profile" element={<PersonalInfoTable />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/games" element={<Games />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/my-ledger" element={<MyLedger />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/completed-games" element={<CompletedGames />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/match" element={<Match />} />
          <Route path="/manual-games" element={<ManualGames />} />
          <Route path="/1807030" element={<Rendomepage />} />

        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
