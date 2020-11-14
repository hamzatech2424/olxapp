import React from "react"


const Hero = ({handleLogout}) =>{
    return(
    <React.Fragment>

    <h1>welcome</h1>
    <button onClick={handleLogout}>Log Out</button>
    

    </React.Fragment>)
}


export default Hero