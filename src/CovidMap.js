import { React, useState, useEffect } from "react";
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
  const [local, setLocal] = useState(null);
  const [clickLocal,setClickLocal]=useState(null);
  const [localData,setLocalData]=useState({
    distance:"",
    infected:""
  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:5000/covidData");
        setLocal(response.data)
        console.log(response.data.updated_data)
      } catch {
        console.log("Error");
      }
    };
    fetchData();
  }, []);

  useEffect(()=>{
    console.log(clickLocal)
    
  },[clickLocal])

  const click=(id)=>{
    setClickLocal(id)
    console.log(local.data[id].num)
  }
  // if (local == null) {
  //   return <p>Loading ...</p>;
  // }
  return (
    <div>
      <h1>대한민국 지역별 코로나 현황</h1>
      <h2>{clickLocal} 코로나 정보 </h2>
      <div>거리두기 단계 : </div>
      <div>확진자 수 : </div>

      <svg width="700px" height="1000px" viewBox="0 0 800 1200">
        <Seoul onClick={(e) => click(e.target.id)} />
        <Gyeonggi onClick={(e) =>click(e.target.id)} />
        <Gangwon onClick={(e) =>click(e.target.id)}/>
        <Incheon onClick={(e) =>click(e.target.id)}/>
        <Chungnam onClick={(e) =>click(e.target.id)}/>
        <Chungbuk onClick={(e) =>click(e.target.id)}/>
        <Sejong onClick={(e) =>click(e.target.id)}/>
        <Daejeon onClick={(e) =>click(e.target.id)}/>
        <Gyeongnam onClick={(e) =>click(e.target.id)}/>
        <Gyeongbuk onClick={(e) =>click(e.target.id)}/>
        <Jeonbuk onClick={(e) =>click(e.target.id)}/>
        <Jeonnam onClick={(e) =>click(e.target.id)}/>
        <Ulsan onClick={(e) =>click(e.target.id)}/>
        <Busan onClick={(e) =>click(e.target.id)}/>
        <Daegu onClick={(e) =>click(e.target.id)}/>
        <Gwangju onClick={(e) =>click(e.target.id)}/>
        <Jeju onClick={(e) =>click(e.target.id)}/>
      </svg>
    </div>
  );
}
export default CovidMap;
