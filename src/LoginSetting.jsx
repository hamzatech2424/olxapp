import React, { useEffect, useState } from "react"
import "./index.css"
import fire from "./firebase"
import Login from "./Login";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AllCategories from "./AllCategories";


const LoginSetting = () =>{

    const [user,setuser] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [emailError,setemailError] = useState("");
    const [passwordError,setpasswordError] = useState("");
    const [hasAccount,sethasAccount] = useState(false);


    const clearInputs = () =>{
        setemail("");
        setpassword("");
    }


    const clearErrors = ()  =>{
        setpasswordError("");
        setemailError("");
    }

    const handleLogin = () =>{
        clearErrors();
        
      fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch((err)=>{
          switch(err.code){
           case "auth/invalid-email":
           case "auth/user-disabled":
          case "auth/user-not-found":
              setemailError(err.message)
              break;
           case "auth/wrong-password":
               setpasswordError(err.message)
               break;    
          }
      });
    //   alert("you are login")
    };



    const handleSignup = () =>{
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch((err)=>{
            switch(err.code){
             case "auth/email-already-in-use":
             case "auth/invalid-email":
                setemailError(err.message)
                break;
             case "auth/weak-password":
                 setpasswordError(err.message)
                 break;    
            }
        });

    } 


    const handleLogout = ()=>{
     fire.auth().signOut();
     alert("you are log out")
    };

    const authListener = () =>{
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                clearInputs();
                setuser(user);
            }
            else {
                setuser("");
            }
        });
    };


    useEffect(()=>{
        authListener();
    }, [])


   
    










    return (<React.Fragment>
    <div className="inner_nav">

    {user ? (
        <AllCategories handleLogout={handleLogout} />

    ) : (
       <Login
       email={email}
       setemail={setemail}
       password={password}
       setpassword={setpassword}
       handleLogin={handleLogin}
       handleSignup={handleSignup}
       hasAccount={hasAccount}
       sethasAccount={sethasAccount}
       emailError={emailError}
       passwordError={passwordError} />
    )
       
    }
    </div>   
    </React.Fragment>)
}


export default LoginSetting