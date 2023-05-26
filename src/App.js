import "./App.css";
import Navbar from "./Component/Navbar";
import NewsBasket from "./Component/NewsBasket";
import AboutUs from "./Component/AboutUs";
import Contact from "./Component/Contact";
// import {Button} from '@mui/material'
import { Routes } from "react-router-dom";
import { Route } from "@mui/icons-material";
function App() {
  return (
    <>
    <Navbar/>
    {/* <NewsBasket/> */}
      <Route>
      <Routes>
        
        <Route path="/" element={<NewsBasket/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      </Route>
    </>
  );
}

export default App;
