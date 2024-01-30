import React, { useState, useEffect } from 'react';
import "./style.css"
function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [searchValue,setSearchValue] = useState(); 

  useEffect(() => {
    getWeatherInfo();
  }, []);

  async function getWeatherInfo() {
    const apiKey = '4a89a851ec4c1f1ae29707545c87fcdb';
    // const city = 'pune'; // Change this to the desired city
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        
        setWeatherData(data);
      } else {
        console.error('Error fetching weather data:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  

  
  
  return (
    // <div>
    //   <h1>Weather App</h1>
    //   {weatherData && (
    //     <div>
    //       <h2>Weather in {weatherData.name}</h2>
    //       <p>Temperature: {weatherData.main.temp}°C</p>
    //       <p>Weather: {weatherData.weather[0].description}</p>
    //     </div>
    //   )}
    // </div>

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
      {weatherData && (
      <article className='widget'>
        <div className='weatherIcon'>
          <i className={"wi wi-day-sunny"}></i>
        </div>
        <div className='weatherInfo'>
          <div className='temperature'>
          
            <span>{weatherData.main.temp}&deg;C</span>
          </div>
          <div className='description'>
            <div className='weatherCondition'>{weatherData.weather[0].description}</div>
            <div className='place'>{weatherData.name}, {weatherData.sys.country}</div>

          </div>
          
        </div>
       


        {/* Time And Date  */}
        <div className='date'> {new Date().toLocaleString()} </div>


        {/* extra four infor tab  */}
        <div className='extra-temp'>
          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-celsius"}></i>
              </p>
              <p className='extra-info-leftside'>
               {weatherData.main.temp_max} &deg;C
                {/* Min: {weatherData.main.temp_max}  */}
                <br/>max
              </p>
            </div>


            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className='extra-info-leftside'>
              {weatherData.main.humidity} %<br />
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
              {weatherData.main.pressure} mbar<br />
                Pressure
              </p>
            </div>


            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className='extra-info-leftside'>
              {weatherData.wind.speed} m/s<br />
                Speed
              </p>
            </div>            
          </div>   
        </div>  
        
      </article>
      
      )}
     
    </>
  );
}

export default WeatherApp;
