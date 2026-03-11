import React from "react";

function Menu({setCategory}){

return(

<div className="menu">

<button onClick={()=>setCategory("Dogs")}>🐶 Dogs</button>

<button onClick={()=>setCategory("Cats")}>🐱 Cats</button>


</div>

);

}

export default Menu;