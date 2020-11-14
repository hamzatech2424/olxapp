import React, { useState, useEffect } from "react"
import { renderIntoDocument } from "react-dom/test-utils";
import "./index.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import fire from "./firebase";
import Houses from './Houses'
import { storage } from "firebase";




const PostAdd = () =>{
  
    const [image,setimage] = useState(null);
    const [url,seturl] = useState("");

    let key = Math.floor(Math.random()*1213121);
    let hamza = "";

            
    const [data,setdata] = useState({
        make: "",
        title: "",
        new: "",
        used: "",
        description: "",
        price:"",
        location: "",
        category: "",
    
        

    });

    const [datArray,setdatArray] = useState([]);


    useEffect(()=>{
        async function getData(){
            const res = await fire.database().ref("Houses/" + data.category + key) .once("value",function(data){
                hamza =  data.val();
            })

        };
            getData();
        
        })


    
    

    const fileSelectedHandler = (event) => {
    //    console.log(event.target.files[0]);

     if(event.target.files[0]){
         setimage(event.target.files[0])
     }
    }

    const fileUploadHandler = () =>{
      const uploadTask = storage().ref(`images/${image.name}`).put(image);
      uploadTask.on("state_changed",snapshot =>{},
      error =>{
          console.log(error);
      },
      ()=>{
          storage().ref("images").child(image.name).getDownloadURL().then(url =>{
              console.log(url);
              seturl(url);
          });
      }
      
      );

    };



    console.log("url=>",url)




    //form submittion function
    const onSubmit = (e) =>{
        e.preventDefault();
        
        const message = fire.database().ref("Houses/"+ data.category + key).set(data);
            
    }



    //sbmit function for all input fields
    const SubmitData = (event) =>{
        console.log(event.target.value);
        console.log(event.target.name);

        // const [value,name] = event.target;
        const name = event.target.name;
        const value = event.target.value;

        setdata((prevval)=>{
               if(name === "make"){
               return { 
                make: value,
                title: prevval.title,
                new: prevval.new,
                used: prevval.used,
                description: prevval.description,
                price:prevval.price,
                location: prevval.location, 
                category : prevval.category
                
               }
            }  
            
            else if(name === "title"){
                return { 
                    make: prevval.make,
                    title: value,
                    new: prevval.new,
                    used: prevval.used,
                    description: prevval.description,
                    price:prevval.price,
                    location: prevval.location,  
                    category : prevval.category
                    
                   }
             } 

             else if(name === "new"){
                return { 
                 make: prevval.make,
                 title: prevval.title,
                 new: value,
                 used: prevval.used,
                 description: prevval.description,
                 price:prevval.price,
                 location: prevval.location,  
                 category : prevval.category
                 
                 
                }
             } 

             else if(name === "used"){
                return { 
                 make: prevval.make,
                 title: prevval.title,
                 new: prevval.new,
                 used: value,
                 description: prevval.description,
                 price:prevval.price,
                 location: prevval.location, 
                 category : prevval.category 
                
                 
                }
             }

            else if(name === "descript"){
                return { 
                    make: prevval.make,
                    title: prevval.title,
                    new: prevval.new,
                    used: prevval.used,
                    description: value,
                    price:prevval.price,
                    location: prevval.location,  
                    category : prevval.category
                    
                   }
             } 

            else if(name === "price"){
                return { 
                    make: prevval.make,
                    title: prevval.title,
                    new: prevval.new,
                    used: prevval.used,
                    description: prevval.description,
                    price: value,
                    location: prevval.location,  
                    category : prevval.category
                
                    
                   }
             }
             
             else if(name === "location"){
                return { 
                    make: prevval.make,
                    title: prevval.title,
                    new: prevval.new,
                    used: prevval.used,
                    description: prevval.description,
                    price: prevval.price,
                    location: value,  
                    category : prevval.category
                    
                    
                   }
             } 
            

             else if(name === "categ"){
                return { 
                    make: prevval.make,
                    title: prevval.title,
                    new: prevval.new,
                    used: prevval.used,
                    description: prevval.description,
                    price: prevval.price,
                    location: prevval.location,  
                    category : value
                  
                   }
             }


             

            //  data["url"] = url;
        })

        

    }



    const dataSend = () =>{

        // setdata((pre)=>{
        //     return{...pre,url:url}
        // })
        
        setdatArray((previous) =>{
            datArray.push(data["url"]=url);
            datArray.shift();
            return [...previous,data]
        } )
        
    }

console.log(datArray)






    return (<React.Fragment>

<br/>
 <div className="post_container">
 <h3 style={{marginTop:"10px",marginBottom:"20px",textAlign:"center",fontFamily:"Roboto,Arial,Helvetica,sans-serif"}}>POST YOUR ADD</h3>
 <div className="inner_post">
     <div>
         <h4 style={{fontSize:"14px",fontFamily:"Roboto,Arial,Helvetica,sans-serif"}}>INCLUDE SOME DETAILS</h4>
         <form onSubmit={onSubmit}>
         {/* <form > */}
         <div className="inner_form1">
             <label>Make*</label><br/>
             <input type="text" onChange={SubmitData} name="make" value={data.make}  /><br/>
             <label style={{fontSize:"9px",color:'#cfd1d3'}}>for example Samsung,apple etc</label><br/><br/>

           <label>Condition*</label><br/>
           <input type="button" onClick={SubmitData} value="new" name="new" style={{marginRight:"10px",backgroundColor:'white',padding:"3px",fontSize:"10px"}} />
           <input type="button" onClick={SubmitData} value="used" name="used" style={{marginBottom:"20px",backgroundColor:'white',padding:"3px",fontSize:"10px"}} /><br/>

           <label >Ad title*</label><br/>
           <input type="text" onChange={SubmitData} name="title" value={data.title}  ></input><br/>
           <label style={{fontSize:"9px",color:'#cfd1d3'}}>Mention the key featurs of your item (e.g brand,model,age, type)</label><br/><br/>
           <label>Description*</label><br/>
           <textarea onChange={SubmitData} name="descript" value={data.description} /><br/>
           <label style={{fontSize:"9px",color:'#cfd1d3'}}>include condition,features and reason for selling</label>

           </div>

           <div className="inner_form2">
                <h4 style={{marginBottom:"10px"}}>SET A PRICE</h4>
                <label style={{color:'#cfd1d3'}}>Price*</label><br/>
                <div className="price_input">
                <label style={{fontSize:"12px"}}>Rs: |</label>
                <input type="text" style={{width:"130px",height:"19px",float:"right",border:"none"}} onChange={SubmitData} name="price" value={data.price}  />
                </div>

                </div>

         


            <div className="img_upload">
        <input type="file" onChange={fileSelectedHandler} name="image" />

        <br/> <br/>

        <button style={{color:"white",backgroundColor:"purple"}} onClick={fileUploadHandler}>Save</button><br/>

        <label><b>Image Preview here:</b></label><br/>
        <img src={url} style={{width:"70px",height:"70px",backgroundColor:"grey"}}  alt="no image" /><br/>

        

         
         
        </div>

            <div className="select_location">
            
            <input type="text" name="location" onChange={SubmitData} placeholder="Location" value={data.location} />

            <p style={{color:'red',paddingBottom:"10px",paddingTop:"10px",fontSize:"13px"}}>This field is mandatory*</p>

            </div>
             
            <div className="category_div"> 
            <input type="text" placeholder="category" name="categ" value={data.category} onChange={SubmitData} style={{display:"block"}} />
            <label style={{fontSize:"9px",color:'red'}}>Select only MobilePhones,Cars,Motorcycles,Houses,Tv-Audio-Video,Tablets,Land</label>
            </div>


            <div style={{paddingTop:"20px"}}>
                <button onClick={dataSend} type="submit" style={{color:"white",backgroundColor:"green",padding:"5px"}}>Submit</button>
            </div>

            
         </form>

         <p>{hamza.title}</p>

         


     </div>

     
 </div>

</div>




    </React.Fragment>)
}


export default PostAdd