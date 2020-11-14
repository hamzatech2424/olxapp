import React from "react"
import "./index.css"
import avatar from "./images/avatar.png";
import mappic from "./images/staticmap.png"

const Details = (props) =>{


console.log(props.sendData)



    return (
        <React.Fragment>
       
        <div className="inner_nav">

        <div className="details_first_div">

        <div className="image_div">

        <div className="Featured_for_products"><p style={{fontSize:"7px",textAlign:"center",fontFamily: "Arial,Helvetica,sans-serif",fontWeight:"bold"}}>FEATURED</p></div>
       <img src={mappic} style={{height:"100%" ,width:"400px",margin:" 0 75px" }} />

 
    </div>


                    <div className="description">

                    <div style={{height:"60px",width:"530px",margin:" 5px 10px",position:"absolute" , borderBottom:"1px solid #e3e7ea"}}>
                        <p style={{fontFamily: "Roboto,Arial,Helvetica,sans-serif",fontSize:"13px",marginLeft:"10px",marginTop:"4px",color:"#002f34"}}><b>Details</b></p>
                        <p style={{fontFamily: "Roboto,Arial,Helvetica,sans-serif",fontSize:"10px",marginLeft:"10px",marginTop:"18px",color:"#002f34"}}>Make</p>
                    </div>

                    <div style={{height:"110px",width:"530px",margin:" 0 10px",position:"absolute",top:"75px"}}>
                           <p style={{fontFamily: "Roboto,Arial,Helvetica,sans-serif",fontSize:"15px",marginLeft:"10px",marginTop:"5px",color:"#002f34"}}><b>Description</b></p>
                           <p style={{fontFamily: "Roboto,Arial,Helvetica,sans-serif",fontSize:"10px",marginLeft:"10px",marginTop:"5px",color:"#002f34"}}>Make</p>
                    </div>

                         </div>

        </div>
   


     <div className="details_Second_div">

            <div className="price_div">

            <p style={{fontFamily: "Roboto,Arial,Helvetica,sans-serif",fontSize:"23px",marginLeft:"10px",marginTop:"4px",color:"#002f34"}}><b>{props.sendData}</b></p>
            <p style={{fontFamily: "Roboto,Arial,Helvetica,sans-serif",fontSize:"10px",marginLeft:"10px",marginTop:"4px",color:"#002f34"}}>Name</p>
            <p style={{fontFamily: "Roboto,Arial,Helvetica,sans-serif",fontSize:"10px",marginLeft:"10px",marginTop:"30px",color:"#002f34"}}>Location</p>

            </div>


            <div className="seller_description">

            <p style={{fontFamily: "Roboto,Arial,Helvetica,sans-serif",fontSize:"14px",marginLeft:"10px",marginTop:"4px",color:"#002f34"}}>Seller description</p>
            <div style={{width:"220px",height:"50px",margin:"5px 10px",}}>

                <div className="seller_div_internal">
                <img style={{width:"50px",height:"50px"}}  src={avatar} />
                </div>

                <p style={{display:"inline",fontFamily: "Roboto,Arial,Helvetica,sans-serif",fontSize:"12px",marginLeft:"5px",marginTop:"15px",position:"absolute",color:"#002f34"}}><b>Name of Seller</b></p>

                
            </div>

            <button className="chat_with_seller_btn">Chat with Seller</button>

        <div className="phone">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
           </svg>
           <p style={{display:"inline"}}>*** *******</p>
           <a href="#" style={{fontSize:"10px"}}>show number</a>
        </div>

            </div>

            <div className="posted" >

            <p style={{fontFamily: "Roboto,Arial,Helvetica,sans-serif",fontSize:"14px",marginLeft:"10px",marginTop:"4px",color:"#002f34"}}><b>Posted in</b></p>
  
            <img src={mappic} style={{height:"140px",width:"210px",margin:"3px 10px"}} />


            </div>
       

     </div>   

     





         
















        </div>



        </React.Fragment>
    )
}



export default Details