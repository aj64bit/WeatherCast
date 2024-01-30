import React, { useEffect } from "react"
import './style.css'
const Temp = () => {
      const [searchValue,setSearchValue] =React.useState("pune")
      // const [tempInfo,setTempInfo] =useState("");
      const getWeatherInfo = async ()=>{
        try{
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=4a89a851ec4c1f1ae29707545c87fcdb`;
          let res = await fetch(url);
          let data = await res.json();

          const {temp} = data.ma




          console.log(data);

          
        }catch(error){
          console.log(error);
        }
      };

      

      useEffect(()=>{
        getWeatherInfo();
      },[]);


  return (
    <>
      <div className='wrap'>

       {/* SearchBar */}

      <div className='search'>
        <input type="search" placeholder='City name...' autoFocus name='search' className='searchTerm'
          value={searchValue}
          onChange={(e)=>setSearchValue(e.target.value)}
        />

        {/* SearchButton */}
        <button className='searchButton' type='button' onClick={getWeatherInfo}> Search</button>
      </div>
      </div>

      
      <article className='widget'>
        <div className='weatherIcon'>
          <i className={"wi wi-day-sunny"}></i>
        </div>
        <div className='weatherInfo'>
          <div className='temperature'>
            <span>25.5&deg;</span>
          </div>
          <div className='description'>
            <div className='weatherCondition'>Sunny</div>
            <div className='place'>Pune,India</div>

          </div>
          
        </div>

        {/* Time And Date  */}
        <div className='date'> {new Date().toLocaleString()} </div>


        {/* extra four infor tab  */}
        <div className='extra-temp'>
          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className='extra-info-leftside'>
                19:19 PM <br />
                Sunset
              </p>
            </div>


            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className='extra-info-leftside'>
                19:19 PM <br />
                Humidity
              </p>
            </div>            
          </div>

          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className='extra-info-leftside'>
                19:19 PM <br />
                Pressure
              </p>
            </div>


            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className='extra-info-leftside'>
                19:19 PM <br />
                Speed
              </p>
            </div>            
          </div>

          




            
        </div>
      </article>
    </>
  )
}

export default Temp