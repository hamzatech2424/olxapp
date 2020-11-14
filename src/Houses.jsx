import React, { useEffect , useState} from "react"
import "./index.css"
import Card from "./Card"
import fire from "./firebase"
import Footer from "./Footer"


const Houses = () =>{

let house1 = "";
let house2 = "";
let house3 = "";
let house4 = "";
let house5 = "";
let house6 = "";
let house7 = "";
let house8 = "";


const [houseArray,sethouseArray] = useState([]);
const [hide,sethide] = useState(true);
const [hide2,sethide2] = useState(false);

 
useEffect(()=>{
     async function getData(){

        const res1 = await  fire.database().ref("Houses/houses102788" ) .once("value",function(data){
            house1 =  data.val();
        })

        const res2 = await  fire.database().ref("Houses/houses1099553" ) .once("value",function(data){
          house2 =  data.val();
      })

      const res3 = await  fire.database().ref("Houses/houses1137904" ) .once("value",function(data){
        house3 =  data.val();
    })

    const res4 = await  fire.database().ref("Houses/houses14836" ) .once("value",function(data){
        house4 =  data.val();
    })

    const res5 = await  fire.database().ref("Houses/houses172635" ) .once("value",function(data){
        house5 =  data.val();
    })

    const res6 = await  fire.database().ref("Houses/houses297783" ) .once("value",function(data){
        house6 =  data.val();
    })

    const res7 = await  fire.database().ref("Houses/houses30427" ) .once("value",function(data){
        house7 =  data.val();
    })

    const res8 = await  fire.database().ref("Houses/houses846802" ) .once("value",function(data){
        house8 =  data.val();
    })

      }

      getData();


 


    })


    const ShowhousePosts = () =>{
        sethouseArray((prevV)=>{
            return [...prevV,house1,house2,house3,house4,house5,house6,house7,house8]
        })
        sethide(false)
    }



console.log(houseArray[0])



    return (
    <React.Fragment>
        <div className="inner_nav">

        {houseArray.map((value)=>{
          return <Card price={value.price} description={value.description} image={value.url} />
        })}
        
        {hide?<button onClick={ShowhousePosts} style={{backgroundColor:"rgb(0, 47, 52)",color:"white",width:"200px",height:'45px',marginLeft:"270px",marginTop:"150px"}}>Click Me to view your Houses adds</button>: null}

      

        </div>

        
<div className="load_more">
{hide2?<button className="load_More_btn">Load More</button>:null}
</div>

         <Footer />

    </React.Fragment>
    )
}

export default Houses