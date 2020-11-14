import React, { useEffect , useState} from "react"
import Card from "./Card"
import fire from "./firebase"
import Footer from "./Footer"


const MobilePhones = () =>{

let mobile1 = "";
let mobile2 = "";
let mobile3 = "";
let mobile4 = "";
let mobile5 = "";
let mobile6 = "";
let mobile7 = "";
let mobile8 = "";
let mobile9 = "";

const [mobileArray,setmobileArray] = useState([]);
const [hide,sethide] = useState(true);
const [hide2,sethide2] = useState(false);
const [hideftr,sethideftr] =useState(false)

 
useEffect(()=>{
 async function getData(){

        const res1 = await  fire.database().ref("firstdata/mobiles314794" ) .once("value",function(data){
            mobile1 =  data.val();
        })

        const res2 = await  fire.database().ref("firstdata/mobiles294972" ) .once("value",function(data){
          mobile2 =  data.val();
      })

      const res3 = await  fire.database().ref("firstdata/mobiles315473" ) .once("value",function(data){
        mobile3 =  data.val();
    })

    const res4 = await  fire.database().ref("firstdata/mobiles389958" ) .once("value",function(data){
        mobile4 =  data.val();
    })

    const res5 = await  fire.database().ref("firstdata/mobiles848947" ) .once("value",function(data){
        mobile5 =  data.val();
    })

    const res6 = await  fire.database().ref("firstdata/mobiles95747" ) .once("value",function(data){
        mobile6 =  data.val();
    })

    const res7 = await  fire.database().ref("firstdata/mobiles32220" ) .once("value",function(data){
        mobile7 =  data.val();
    })

    const res8 = await  fire.database().ref("firstdata/mobiles318320" ) .once("value",function(data){
        mobile8 =  data.val();
    })

    const res9 = await  fire.database().ref("firstdata/mobiles217423" ) .once("value",function(data){
        mobile9 =  data.val();
    })
      }

      getData();



    }, [])


    const ShowMobilePosts = () =>{

        
      setmobileArray((prevV)=>{
        return [...prevV,mobile1,mobile2,mobile3,mobile4,mobile5,mobile6,mobile7,mobile9]
    })
    sethide(false);
    sethideftr(true);
    sethide2(true)

    }



console.log(mobileArray[0])



    return (
    <React.Fragment>
        <div className="inner_nav">

        {mobileArray.map((value)=>{
          return <Card price={value.price} description={value.description} image={value.url} />
        })}
        
        {hide?<button onClick={ShowMobilePosts} style={{backgroundColor:"rgb(0, 47, 52)",color:"white",width:"200px",height:'45px',marginLeft:"270px",marginTop:"150px"}}>Click Me to view your Mobilephones adds</button>: null}

        <div className="load_more">
{hide2?<button>Load More</button>:null}
</div>

        </div>







        <Footer />

    </React.Fragment>
    )
}

export default MobilePhones