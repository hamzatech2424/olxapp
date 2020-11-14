import React, { useState } from "react"
import "./index.css"
import { NavLink } from "react-router-dom";
import sellimg from "./images/sell.jpg"



const Navbar = () =>{

  const [d1,setd1] = useState();
  const [src,setsrc] = useState();


  const Search = (event) => {
     setd1(event.target.value)
  }

  const Search_Btn = () =>{
    setsrc(d1)
  }

 



    return(
        <React.Fragment>


<nav className="navbar">
<div className="inner_nav">


{/* logo here */}
<div className="img">
  <NavLink to="/" exact className="navbar-brand" href="#">
    <svg width="48px" height="39px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fillRule="evenodd"><path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z" /> </svg>
  </NavLink>
</div>
{/* logo ends here  */}



{/* location field */}
  <div className="location">
  <svg style={{display:"inline",marginLeft:"5px",marginRight:"2px",paddingTop:"4px"}} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
</svg>

{/* <form>
<select id="cars" name="cars" className="selected">
  <input type="text" placeholder="Punjab" className="input1"  />
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
</select> 
</form> */}


<input aria-label="Search" type="text" placeholder="Punjab" className="input1"  />

<select name="cars" id="cars" style={{width:"20px",border:"none"}}>

    <option value="volvo" className="sub_options" >

{/* <button style={{backgroundColor:"#FFFFFF",border:"none",marginLeft:"2px"}} > <svg style={{paddingTop:"7px"}}  className="arrow"  width="19px" height="19px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>  */}
{/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div> */}

{/* // </button> */}
</option>
    <option value="saab">Faisalabad</option>
    <option value="opel" className="sub_options" >Lahore</option>
    <option value="audi" className="sub_options">Islamabad</option>

  </select> 
</div>
{/* location ends field */}




{/* Search Bar */}
   <div class="Search">
  <form style={{display:"inline-block"}} onSubmit={(e)=>{
    e.preventDefault();
    return false;
  }}>
      
        <input className="search_input" onChange={Search} value={d1} style={{width:"350px",height:"26px",position:"relative",top:"7px",border:"1px solid black",borderRadius:"3px",fontSize:"10px",paddingLeft:"5px"}} className="form-control mr-sm-2" type="search" placeholder="Find Cars,Mobile Phones and more..." aria-label="Search" />
        <button onClick={Search_Btn} style={{height:"25px",width:"30px",position:'relative',top:"9px",backgroundColor:"#002f34",border:"none",color:"white",paddingTop:"3px"}} className="btn btn-outline-success my-2 my-sm-0" type="submit">      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
        <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
      </svg></button>
      
      </form>
      

      </div>

      <div></div>

      <div className="buttons_div">
      <NavLink exact to="/login"><button className="login_button">Login</button></NavLink>
      <NavLink  exact to="/addpost"><button className="Sell_button">Sell it!</button></NavLink>
      </div>
{/* 
      <div className="postaddbtn">  
<svg  width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-chat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
      </svg>

      <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-bell" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
        <path fillRule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
      </svg>

      </div> */}



   
   
   

</div>
</nav>
{/* Search ends Bar */}



{/* Categories Bar */}
<div className="Categories">
<div className="inner_nav">
<ul>


<NavLink className="navlinks" exact to="/"><b>All Categories</b></NavLink>
<NavLink className="navlinks" exact to="/mobile">MobilePhones</NavLink>
<NavLink className="navlinks" exact to="/cars">Cars</NavLink>
<NavLink className="navlinks" exact to="/motorcycles">Motorcycles</NavLink>
<NavLink className="navlinks" exact to="/houses">Houses</NavLink>
<NavLink className="navlinks" exact to="/tv">Tv-Audio-Video</NavLink>
<NavLink className="navlinks" exact to="/tablets">Tablets</NavLink>



</ul>
</div>

</div>
{/* Categories Bar ends here */}






<p>{src}</p>



        </React.Fragment>
    )
}



export default Navbar