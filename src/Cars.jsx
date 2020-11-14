import React, { useEffect , useState} from "react"
import "./index.css"
import Card from "./Card"
import fire from "./firebase"
import Footer from "./Footer"


const Cars = () =>{

let cars1 = "";
let cars2 = "";
let cars3 = "";
let cars4 = "";
let cars5 = "";
let cars6 = "";
let cars7 = "";
let cars8 = "";


const [carsArray,setcarsArray] = useState([]);
const [hide,sethide] = useState(true);
const [hide2,sethide2] = useState(false);

 
useEffect(()=>{
     function getData(){

        const res1 =  fire.database().ref("cars/cars126371" ) .once("value",function(data){
            cars1 =  data.val();
        })

        const res2 =  fire.database().ref("cars/cars24242" ) .once("value",function(data){
          cars2 =  data.val();
      })

      const res3 =  fire.database().ref("cars/cars338788" ) .once("value",function(data){
        cars3 =  data.val();
    })

    const res4 =  fire.database().ref("cars/cars361525" ) .once("value",function(data){
        cars4 =  data.val();
    })

    const res5 =  fire.database().ref("cars/cars431645" ) .once("value",function(data){
        cars5 =  data.val();
    })

    const res6 =  fire.database().ref("cars/cars498328" ) .once("value",function(data){
        cars6 =  data.val();
    })

    const res7 =  fire.database().ref("cars/cars612690" ) .once("value",function(data){
        cars7 =  data.val();
    })

    const res8 =  fire.database().ref("cars/cars979119" ) .once("value",function(data){
        cars8 =  data.val();
    })

      }

      getData();


 


    })


    const ShowcarsPosts = () =>{
        setcarsArray((prevV)=>{
            return [...prevV,cars1,cars2,cars3,cars4,cars5,cars6,cars7,cars8]
        })
        sethide(false)
        sethide2(true)
    }



console.log(carsArray[0])



    return (
    <React.Fragment>
        <div className="inner_nav">

        <div className="cars_div">
        {carsArray.map((value)=>{
          return <Card price={value.price} description={value.description} image={value.url} />
        })}
        
        {hide?<button onClick={ShowcarsPosts} style={{backgroundColor:"rgb(0, 47, 52)",color:"white",width:"200px",height:'45px',marginLeft:"270px",marginTop:"150px"}}>Click Me to view your Cars adds</button>: null}

        </div>
       

        <div className="load_more">
{hide2?<button className="load_More_btn">Load More</button>:null}
</div>
       

        </div>

        <Footer />
    </React.Fragment>
    )
}

export default Cars