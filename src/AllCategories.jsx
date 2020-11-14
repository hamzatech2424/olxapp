import React, { useState , useEffect } from "react"
import Banner from "./images/banner1.jpg"
import Footer from "./Footer"
import Card from "./Card"
import fire from "./firebase"
import { NavLink } from "react-router-dom"

const AllCategories = ({handleLogout}) =>{

   
 
let cars1 = "";
let  mobile1 = "";
let  motor2 = "";
let house1 = "";
let cars4 = "";
let cars6 = "";
let cars7 = "";
let cars8 = "";
let mobile5 = "";
let mobile6 = "";
let mobile7 = "";
let mobile8 = "";
let mobile9 = "";
let house4 = "";
let house5 = "";
let house6 = "";
let house7 = "";
let house8 = "";
let tablet1 = "";
let tablet2 = "";
let tablet3 = "";
let tablet4 = "";


const [carsArray,setcarsArray] = useState([]);
const [bulk,setbulkarray] = useState([]);
const [hide,sethide] = useState(true);
const [hide2,sethide2] = useState(false);
const [hideblk,sethideblk] = useState(false);
const [hideftr,sethideftr] =useState(false)
// const [hidelogout,sethidelogout] = useState(true)



 
useEffect(()=>{
 async function getData(){

        const res1 = await  fire.database().ref("cars/cars126371" ) .once("value",function(data){
            cars1 =  data.val();
        })

        const res2 = await fire.database().ref("firstdata/mobiles314794" ) .once("value",function(data){
            mobile1 =  data.val();
        })

        const res3 = await  fire.database().ref("MotorCycles/motorcycles31008" ) .once("value",function(data){
            motor2 =  data.val();
      })

      const res4 = await  fire.database().ref("Houses/houses102788" ) .once("value",function(data){
        house1 =  data.val();
    })

    const res5 = await fire.database().ref("cars/cars338788" ) .once("value",function(data){
        cars4 =  data.val();
    })

    const res7 = await  fire.database().ref("cars/cars498328" ) .once("value",function(data){
        cars6 =  data.val();
    })

    const res8 = await  fire.database().ref("cars/cars612690" ) .once("value",function(data){
        cars7 =  data.val();
    })

    const res9 = await  fire.database().ref("cars/cars979119" ) .once("value",function(data){
        cars8 =  data.val();
    })

    const re5 = await fire.database().ref("firstdata/mobiles848947" ) .once("value",function(data){
        mobile5 =  data.val();
    })

    const re6 = await fire.database().ref("firstdata/mobiles95747" ) .once("value",function(data){
        mobile6 =  data.val();
    })

    const re7 = await fire.database().ref("firstdata/mobiles32220" ) .once("value",function(data){
        mobile7 =  data.val();
    })

    const re8 = await fire.database().ref("firstdata/mobiles318320" ) .once("value",function(data){
        mobile8 =  data.val();
    })

    const re9 = await fire.database().ref("firstdata/mobiles217423" ) .once("value",function(data){
        mobile9 =  data.val();
    })

    const r4 = await  fire.database().ref("Houses/houses14836" ) .once("value",function(data){
        house4 =  data.val();
    })

    const r5 = await  fire.database().ref("Houses/houses172635" ) .once("value",function(data){
        house5 =  data.val();
    })

    const r6 = await  fire.database().ref("Houses/houses297783" ) .once("value",function(data){
        house6 =  data.val();
    })

    const r7 = await fire.database().ref("Houses/houses30427" ) .once("value",function(data){
        house7 =  data.val();
    })

    const r8 = await  fire.database().ref("Houses/houses846802" ) .once("value",function(data){
        house8 =  data.val();
    })
    
    const b1 = await fire.database().ref("Tablets/tablets1160984" ) .once("value",function(data){
        tablet1 =  data.val();
    })

    const b2 = await fire.database().ref("Tablets/tablets1206672" ) .once("value",function(data){
      tablet2 =  data.val();
  })

  const b3 = await  fire.database().ref("Tablets/tablets19402" ) .once("value",function(data){
    tablet3 =  data.val();
})

const b4 = await  fire.database().ref("Tablets/tablets228858" ) .once("value",function(data){
    tablet4 =  data.val();
})




    }

    getData();

 

  })



  const arre = [cars4,mobile5,cars6,house4,cars7,mobile6,tablet2,mobile9]



  const ShowcarsPosts = () =>{

    setcarsArray((prevV)=>{
        return [...prevV,cars1, mobile1, motor2,house1]
    })

    setbulkarray((pre)=>{
        return[...pre,cars4,mobile5,cars6,house4,cars7,mobile6,tablet2,mobile9]
    })
 
 
    sethide(false)
    sethide2(true)
    sethideblk(true)
    sethideftr(true)
    // sethidelogout(false)
}




 const productdata = (id) =>{
     setbulkarray((olddata)=>{
         olddata.filter((currdata,indx) =>{
             if(indx !== id){
                 return currdata
             }
         })
     })
     console.log(id)
 }


    return (<div>

    
<div className="inner_nav" style={{height:"30px",backgroundColor:"rgba(0,47,52,.03)"}}>
    <button style={{float:"right",backgroundColor:"red",color:"white",padding:"3px",borderRadius:"3px",border:"none"}} onClick={handleLogout}>Log Out</button>
    </div> 



    <img style={{width:"100%",height:"150px"} } src={Banner}  alt="pic" />

    <div className="inner_nav">
    <div className="recoomend">
    <p style={{fontFamily: "Roboto,Arial,Helvetica,sansSerif",paddingTop:"10px",paddingLeft:"20px"}}>Fresh Recomendations</p>



 {carsArray.map((value,index)=>{
  return <NavLink style={{color:"#002f34"}} exact to="details" > <Card price={value.price} description={value.description} image={value.url}  /> </NavLink>
})}

{hide?<button onClick={ShowcarsPosts} style={{backgroundColor:"rgb(0, 47, 52)",color:"white",width:"200px",height:'45px',marginLeft:"270px",marginTop:"150px"}}>Click Me to view your All Categories adds</button>: null}

</div>





{hideblk?<div className="bulk_adds">

{bulk.map((value,index)=>{
  return <Card price={value.price} description={value.description} image={value.url} databhaejna={productdata} id={index} />
})}

</div>:null}


<div className="load_more">
{hide2?<button className="load_More_btn">Load More</button>:null}
</div>





    
</div>

     {hideftr?<Footer />:null}














    </div>)
} 

export default AllCategories


