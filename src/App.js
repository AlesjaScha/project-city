import { useState } from "react";
import {data} from './data';
import  './App.css';


function App(){

  const[hotels,setHotels]=useState(data);
  const[showText,setShowText]=useState(false);
  const remouveHotel=(id)=>{
    let newHotels= hotels.filter((hotel)=>hotel.id!==id);
    setHotels(newHotels);

  }
  const showTextClick=(item)=>{
    item.showMore=!item.showMore
    setShowText(!showText)
  }
  return(<div>
    <div className="container">
      <h1>NYC top {hotels.length}Hotels</h1>
    </div>
    {hotels.map((item=>{
      const {id,hotelName,description,image,source,showMore}=item;

      return(<div key={id}>
        <div className="container">
          <h2>{id}-{hotelName}</h2>
        </div>
        <div className="container">
          <p>{showMore?description :description.substring(0,190)+"....."}
          <button onClick={()=>showTextClick(item)(!showMore)}>{showMore?"Showless":"Showmore"}</button></p>
        </div>

        <div className="container">
          <img src={image}width="500px"alt="city"/>
        </div>
        
        <div className="container">
      <p>{source}</p>
        </div>

        < div className="container">
          <button className="btn"onClick={()=>remouveHotel(id)}>Remouve</button>
        </div>
        </div>
      )
    }))}



  
  </div>)
  
}




export default App ;