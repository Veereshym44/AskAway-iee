import React,{useState,useEffect}from 'react'

function Home() {
const [data,setData]=useState([])
    useEffect(()=>{
fetch("/allpost",{
    headers:{
        "authorization":"Bearer "+localStorage.getItem('jwt')
    }
}).then(res=>res.json())
.then(result=>{
   setData(result.posts)

    
})

    },[])
    return ( 
        <div className='home-container'>
         {
            data.map(item=>{
                return(
                               
<div className="card home-card" >
    
  
    <div className='card-content'>
    <div>
    <h3>{item.title}</h3>
    </div>
        <hr/>
        
        <p>{item.body}</p>
        <i className="material-icons" style={{color:"red"}}>favorite</i>
        
    
    </div>
</div>
                )
            })
         } 
         
 
        </div>
     );
}


export default Home;