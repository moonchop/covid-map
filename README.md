# 코로나 맵 실습을 통한 axios 활용

## Usage
```sh
> python app.py
> yarn start
```
## axios
```
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
```
axios를 통해 URL에서 데이터를 받아와 response.data를 setLocal 이라는 state에 저장함.

```
setLocalData({
      distance:local.data[id].level,
      infected:local.data[id].num
    })
```
click 한 지역의 id를 받아와 지역별 거리두기 단계와 확진자 수에 접근함.

## POST /covidData 
```json
{
    "data": [
        {
            "area": "서울",
            "level": 4,
            "num": 464
        },
        {
            "area": "부산",
            "level": 3,
            "num": 107
        },
        {
            "area": "대구",
            "level": 3,
            "num": 84
        },
        {
            "area": "인천",
            "level": 4,
            "num": 103
        },
        {
            "area": "광주",
            "level": 3,
            "num": 14
        },
        {
            "area": "대전",
            "level": 4,
            "num": 50
        },
        {
            "area": "울산",
            "level": 3,
            "num": 24
        },
        {
            "area": "세종",
            "level": 3,
            "num": 20
        },
        {
            "area": "경기",
            "level": 4,
            "num": 462
        },
        {
            "area": "강원",
            "level": 3,
            "num": 26
        },
        {
            "area": "충북",
            "level": 3,
            "num": 41
        },
        {
            "area": "충남",
            "level": 3,
            "num": 53
        },
        {
            "area": "전북",
            "level": 3,
            "num": 34
        },
        {
            "area": "전남",
            "level": 3,
            "num": 24
        },
        {
            "area": "경북",
            "level": 3,
            "num": 56
        },
        {
            "area": "경남",
            "level": 3,
            "num": 98
        },
        {
            "area": "제주",
            "level": 3,
            "num": 16
        }
    ],
    "status": "success",
    "updated_data": "2021년 08.06. 00시"
}
```
