import React, { useState } from 'react'
import Card from './pages/Card';

const Cards = () => {

    const [data,setdata]=useState([])
   
    const  fetchdata=async()=>{
        const res=await fetch('https://jsonplaceholder.typicode.com/users');
        const data1= await res.json();
        setdata(data1)
      
     };
     if(data.length===0)fetchdata();
     
 
  return (<>
    {data.length===0?'no data':data.map((e)=>{ return <Card  key={e.id} userdata={e}/>})}
    </>
  )
}

export default Cards