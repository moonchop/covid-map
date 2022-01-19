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
  const color_arr = [null,"green","yellow","orange","red"];


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:5000/covidData");
        setLocal(response.data)

      } catch {
        console.log("Error");
      }
    };
    fetchData();
  }, []);

  const click=(id)=>{
    setClickLocal(id)
    setLocalData({
      distance:local.data[id].level,
      infected:local.data[id].num
    })
  }
  if (local == null) {
    return <p>Loading ...</p>;
  }
  
  return (
    <div>
      <h1>대한민국 지역별 코로나 현황</h1>
      <h2>{clickLocal} 코로나 정보 ({local.updated_data}시 기준)</h2>
      <div>거리두기 : {localData.distance}단계</div>
      <div>확진자 수 : {localData.infected}명</div>

      <svg width="700px" height="1000px" viewBox="0 0 800 1200">
        <Seoul onClick={(e) => click(e.target.id)}  fill={color_arr[local.data["서울"].level]}/>
        <Gyeonggi onClick={(e) =>click(e.target.id)} fill={color_arr[local.data["경기"].level]}/>
        <Gangwon onClick={(e) =>click(e.target.id)} fill={color_arr[local.data["강원"].level]}/>
        <Incheon onClick={(e) =>click(e.target.id)} fill={color_arr[local.data["인천"].level]}/>
        <Chungnam onClick={(e) =>click(e.target.id)} fill={color_arr[local.data["충남"].level]}/>
        <Chungbuk onClick={(e) =>click(e.target.id)} fill={color_arr[local.data["충북"].level]}/>
        <Sejong onClick={(e) =>click(e.target.id)} fill={color_arr[local.data["세종"].level]}/>
        <Daejeon onClick={(e) =>click(e.target.id)} fill={color_arr[local.data["대전"].level]}/>
        <Gyeongnam onClick={(e) =>click(e.target.id)} fill={color_arr[local.data["경남"].level]}/>
        <Gyeongbuk onClick={(e) =>click(e.target.id)} fill={color_arr[local.data["경북"].level]}/>
        <Jeonbuk onClick={(e) =>click(e.target.id)} fill={color_arr[local.data["전북"].level]}/>
        <Jeonnam onClick={(e) =>click(e.target.id)} fill={color_arr[local.data["전남"].level]}/>
        <Ulsan onClick={(e) =>click(e.target.id)} fill={color_arr[local.data["울산"].level]}/>
        <Busan onClick={(e) =>click(e.target.id)} fill={color_arr[local.data["부산"].level]}/>
        <Daegu onClick={(e) =>click(e.target.id)} fill={color_arr[local.data["대구"].level]}/>
        <Gwangju onClick={(e) =>click(e.target.id)} fill={color_arr[local.data["광주"].level]}/>
        <Jeju onClick={(e) =>click(e.target.id)} fill={color_arr[local.data["제주"].level]}/>
      </svg>
    </div>
  );
}
export default CovidMap;
