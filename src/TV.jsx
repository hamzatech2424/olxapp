import React, { useEffect , useState} from "react"
import "./index.css"
import Card from "./Card"
import fire from "./firebase"
import Footer from "./Footer"


const TV = () =>{

let tv1 = "";
let tv2 = "";
let tv3 = "";
let tv4 = "";
let tv5 = "";
let tv6 = "";
let tv7 = "";
let tv8 = "";


const [tvArray,settvArray] = useState([]);
const [hide,sethide] = useState(true);
const [hide2,sethide2] = useState(false);
 
useEffect(()=>{
      async function getData(){

        const res1 =await  fire.database().ref("tv/tvs1145543" ) .once("value",function(data){
            tv1 =  data.val();
        })

        const res2 = await  fire.database().ref("tv/tvs1148269" ) .once("value",function(data){
          tv2 =  data.val();
      })

      const res3 = await  fire.database().ref("tv/tvs542211" ) .once("value",function(data){
        tv3 =  data.val();
    })

    const res4 = await fire.database().ref("tv/tvs608605" ) .once("value",function(data){
        tv4 =  data.val();
    })

    const res5 = await  fire.database().ref("tv/tvs635588" ) .once("value",function(data){
        tv5 =  data.val();
    })

    const res6 = await  fire.database().ref("tv/tvs70676" ) .once("value",function(data){
        tv6 =  data.val();
    })

    const res7 = await  fire.database().ref("tv/tvs882235" ) .once("value",function(data){
        tv7 =  data.val();
    })

    const res8 = await  fire.database().ref("tv/tvs896057" ) .once("value",function(data){
        tv8 =  data.val();
    })

      }

      getData();


 


    })


    const ShowtvPosts = () =>{
        settvArray((prevV)=>{
            return [...prevV,tv1,tv2,tv3,tv4,tv5,tv6,tv7,tv8]
        })
        sethide(false)
    }



console.log(tvArray[0])



    return (
    <React.Fragment>
        <div className="inner_nav">

        {tvArray.map((value)=>{
          return <Card price={value.price} description={value.description} image={value.url} />
        })}
        
        {hide?<button onClick={ShowtvPosts} style={{backgroundColor:"rgb(0, 47, 52)",color:"white",width:"200px",height:'45px',marginLeft:"270px",marginTop:"150px"}}>Click Me to view your TV-Audio-Video adds</button>: null}

       

        </div>


        <div className="load_more">
{hide2?<button className="load_More_btn">Load More</button>:null}
</div>

        <Footer />
    </React.Fragment>
    )
}

export default TV