import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {images} from "../data/images";
import "./Gallery.css";

function Gallery({category,search}){

const navigate = useNavigate();

useEffect(()=>{
const isLoggedIn = localStorage.getItem("login");

if(!isLoggedIn){
navigate("/login");
}
},[]);

const [selectedIndex,setSelectedIndex]=useState(null);

let galleryImages = images[category] || [];

if(search){
galleryImages = galleryImages.filter((item)=>
(`${item.title} ${item.desc}`).toLowerCase().includes(search.toLowerCase())
);
}

const downloadImage=(url)=>{
const link=document.createElement("a");
link.href=url;
link.download="image";
link.click();
};

const logout=()=>{
localStorage.removeItem("login");
navigate("/login");
};

return(

<div>

<button className="logout-btn" onClick={logout}>Logout</button>

{/* NO RESULTS MESSAGE */}

{galleryImages.length===0 && (
<h2 className="no-results">No results found 🔍</h2>
)}

<div className="gallery">

{galleryImages.map((item,index)=>(

<div className="card" key={index}>

<img
src={item.img}
alt=""
onClick={()=>setSelectedIndex(index)}
/>

<p><b>{item.title}</b></p>
<p>{item.desc}</p>

<div className="card-buttons">

<button
className="download-btn"
onClick={()=>downloadImage(item.img)}
>
⬇ Download
</button>

</div>

</div>

))}

</div>


{/* POPUP */}

{selectedIndex !== null && (

<div
className="popup"
onClick={()=>setSelectedIndex(null)}
>

<div
className="popup-box"
onClick={(e)=>e.stopPropagation()}
>

<img src={galleryImages[selectedIndex].img} alt=""/>

<p>{galleryImages[selectedIndex].desc}</p>

<div className="popup-buttons">

<button
onClick={()=>setSelectedIndex(
selectedIndex>0 ? selectedIndex-1 : galleryImages.length-1
)}
>
Previous
</button>

<button
onClick={()=>setSelectedIndex(
selectedIndex<galleryImages.length-1 ? selectedIndex+1 : 0
)}
>
Next
</button>

</div>

</div>

</div>

)}

</div>

);

}

export default Gallery;