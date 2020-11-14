import React, { useEffect , useState} from "react"
import "./index.css"
import Card from "./Card"
import fire from "./firebase"
import Footer from "./Footer"
import Details from "./DetailsProduct"


const Tablets = () =>{

let tablet1 = "";
let tablet2 = "";
let tablet3 = "";
let tablet4 = "";
let tablet5 = "";
let tablet6 = "";
let tablet7 = "";
let tablet8 = "";
let tablet9 = "";

const [tabletArray,settabletArray] = useState([]);
const [hide,sethide] = useState(true);
const [hide2,sethide2] = useState(false);

 
useEffect(()=>{
    async function getData(){

        const res1 = await fire.database().ref("Tablets/tablets1160984" ) .once("value",function(data){
            tablet1 =  data.val();
        })

        const res2 = await  fire.database().ref("Tablets/tablets1206672" ) .once("value",function(data){
          tablet2 =  data.val();
      })

      const res3 =  await fire.database().ref("Tablets/tablets19402" ) .once("value",function(data){
        tablet3 =  data.val();
    })

    const res4 = await  fire.database().ref("Tablets/tablets228858" ) .once("value",function(data){
        tablet4 =  data.val();
    })

    const res5 = await  fire.database().ref("Tablets/tablets359050" ) .once("value",function(data){
        tablet5 =  data.val();
    })

    const res6 = await  fire.database().ref("Tablets/tablets615252" ) .once("value",function(data){
        tablet6 =  data.val();
    })

    const res7 = await  fire.database().ref("Tablets/tablets708424" ) .once("value",function(data){
        tablet7 =  data.val();
    })

    const res8 = await  fire.database().ref("Tablets/tablets929173" ) .once("value",function(data){
        tablet8 =  data.val();
    })

      }

      getData();


 


    })


    const ShowtabletPosts = () =>{

        settabletArray((prevV)=>{
            return [...prevV,tablet1,tablet2,tablet3,tablet4,tablet5,tablet6,tablet7,tablet8]
        })

        sethide(false)
    }



console.log(tabletArray[0])



    return (
    <React.Fragment>
        <div className="inner_nav">

        {/* {tabletArray.map((value)=>{
          return <Card price={value.price} description={value.description} image={value.url} />
        })}
        
        {hide?<button onClick={ShowtabletPosts} style={{backgroundColor:"rgb(0, 47, 52)",color:"white",width:"200px",height:'45px',marginLeft:"270px",marginTop:"150px"}}>Click Me to view your Tablets adds</button>: null} */}

        <Details />
       

        </div>

        <div className="load_more">
{hide2?<button className="load_More_btn">Load More</button>:null}
</div>


        <Footer />
    </React.Fragment>
    )
}

export default Tablets