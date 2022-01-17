import {React,useState,useEffect} from "react";
import {
  Seoul,
  Gyeonggi,
  Incheon,
  Gangwon,
  Chungnam,
  Chungbuk,
  Sejong,
  Daejeon,
  Gyeongnam,
  Gyeongbuk,
  Jeonbuk,
  Jeonnam,
  Ulsan,
  Busan,
  Daegu,
  Gwangju,
  Jeju,
} from "./area/all_area";
import axios from "axios";

function CovidMap() {
  const [local,setLocal] = useState(null);

useEffect(()=>{
  const fetchData = async()=>{
  
    try{
      const response = await axios.post(
        'http://localhost:5000/covidData'
      );
      console.log("response",response.data)
      
      setLocal(response.data)
    }
    catch{
      console.log('Error');
    }
  }
  fetchData();
},[])
    
  if(local == null) {
    return <p>Loading ...</p>
  }
  return (
    <div>
    <h1>{local['강원']}hello</h1>
     
    <svg width="700px" height="1000px" viewBox="0 0 800 1200">
     
      <Seoul onClick={(e)=>console.log(e.target.id)}/>
      <Gyeonggi onClick={(e)=>console.log(e.target.id)} />
      <Gangwon />
      <Incheon />
      <Chungnam />
      <Chungbuk />
      <Sejong />
      <Daejeon />
      <Gyeongnam />
      <Gyeongbuk />
      <Jeonbuk />
      <Jeonnam />
      <Ulsan />
      <Busan />
      <Daegu />
      <Gwangju />
      <Jeju />
    </svg>
    </div>
  );
}
export default CovidMap;
