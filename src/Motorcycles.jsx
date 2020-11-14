import React, { useEffect , useState} from "react"
import "./index.css"
import Card from "./Card"
import fire from "./firebase"
import Footer from "./Footer"


const Motorcycles = () =>{

let motor1 = "";
let motor2 = "";
let motor3 = "";
let motor4 = "";
let motor5 = "";
let motor6 = "";
let motor7 = "";
let motor8 = "";
let motor9 = "";

const [motorArray,setmotorArray] = useState([]);
const [hide,sethide] = useState(true);
const [hide2,sethide2] = useState(false);

 
useEffect(()=>{
     async function getData(){

        const res1 = await fire.database().ref("MotorCycles/motorcycles1160180" ) .once("value",function(data){
            motor1 =  data.val();
        })

        const res2 = await fire.database().ref("MotorCycles/motorcycles31008" ) .once("value",function(data){
            motor2 =  data.val();
      })

      const res3 = await fire.database().ref("MotorCycles/motorcycles310128" ) .once("value",function(data){
        motor3 =  data.val();
    })

    const res4 = await  fire.database().ref("MotorCycles/motorcycles504416" ) .once("value",function(data){
        motor4=  data.val();
    })

    const res5 = await  fire.database().ref("MotorCycles/motorcycles508527" ) .once("value",function(data){
        motor5 =  data.val();
    })

    const res6 = await  fire.database().ref("MotorCycles/motorcycles541764" ) .once("value",function(data){
        motor6 =  data.val();
    })

    const res7 = await  fire.database().ref("MotorCycles/motorcycles561029" ) .once("value",function(data){
        motor7 =  data.val();
    })

    const res8 = await  fire.database().ref("MotorCycles/motorcycles694700" ) .once("value",function(data){
        motor8 =  data.val();
    })

    const res9 = await fire.database().ref("MotorCycles/motorcycles858861" ) .once("value",function(data){
        motor9 =  data.val();
    })
      }

      getData();


 


    })


    const ShowMotorPosts = () =>{
        setmotorArray((prevV)=>{
            return [...prevV,motor1,motor2,motor3,motor4,motor5,motor6,motor7,motor8,motor9]
        })
        sethide(false)
    }







    return (
    <React.Fragment>
        <div className="inner_nav">

        {motorArray.map((value)=>{
          return <Card price={value.price} description={value.description} image={value.url} />
        })}
        
        {hide?<button onClick={ShowMotorPosts} style={{backgroundColor:"rgb(0, 47, 52)",color:"white",width:"200px",height:'45px',marginLeft:"270px",marginTop:"150px"}}>Click Me to view your Motorcycles adds</button>: null}

       

        </div>

        <div className="load_more">
{hide2?<button className="load_More_btn">Load More</button>:null}
</div>
       


        <Footer />
    </React.Fragment>
    )
}

export default Motorcycles