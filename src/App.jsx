import React,{useState} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Menu from "./component/Menu";
import SearchBar from "./component/SearchBar";
import Gallery from "./component/Gallery";
import Signup from "./component/Signup";
import Login from "./component/Login";

import "./index.css";

function Home(){

const [category,setCategory]=useState("Dogs");
const [search,setSearch]=useState("");
const [darkMode,setDarkMode]=useState(false);

return(

<div className={darkMode ? "app dark" : "app"}>

<h1 className="title">Image Gallery</h1>

<button
className="dark-btn"
onClick={()=>setDarkMode(!darkMode)}
>
{darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
</button>

<SearchBar setSearch={setSearch}/>

<Menu setCategory={setCategory}/>

<Gallery category={category} search={search}/>

</div>

);

}

function App(){
return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Signup/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/gallery" element={<Home/>}/>

</Routes>

</BrowserRouter>

);
}

export default App;