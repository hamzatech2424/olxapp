import React from "react"
import Navbar from "./Navbar";




const Login = (props) =>{

    const {email,setemail,password,setpassword,handleLogin,handleSignup,hasAccount,sethasAccount,emailError
    ,passwordError} = props ;

    return(
        <React.Fragment>

        <div className="login_main_div">

         <div className="login_inner_div">
        <label>User Name</label><br/>
        <input type="text" onFocus required value={email} onChange={(e)=> setemail(e.target.value)} /><br/>

        <label>Password</label><br/>
        <input type="password" onFocus required value={password} onChange={(e)=> setpassword(e.target.value)} />
         
         <p className="passworerror_show">{passwordError}</p>

          <div className="Btn_Container">
           {hasAccount ? (
               <React.Fragment>
                 <button className="signin" onClick={handleLogin}>Sign In</button>
                 <p>Don't have an account ?<span className="span__insignin" onClick={()=>sethasAccount(!hasAccount)}>Sign up</span></p>
               </React.Fragment>
           ) : (
               <React.Fragment>
               <button className="signup" onClick={handleSignup}>Sign Up</button>
                 <p>Have an account ?<span className="span__insignup" onClick={()=>sethasAccount(!hasAccount)}>Sign in</span></p>
               </React.Fragment>
           )}
          </div>



        
        </div>

        </div>

        </React.Fragment>
    )
}

export default Login