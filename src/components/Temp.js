import React, { useEffect, useState } from "react";
import "../css/style.css";

const Temp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1e12049572d10b90ee69d248bcf18f26`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <div className="box">
      <div className="inputData">
        <input
          type="search"
          value={search}
          className="inputField"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      {!city ? (
        <p className="errorMsg">No Data Found</p>
      ) : (
        <div>
          <div className="info">
            <h1 className="location">
              <i className="fas fa-street-view"></i>
              {search}
            </h1>
            <h2 className="temp">{city.temp}°C</h2>
            <h4 className="tempmin_max">
              Min : {city.temp_min}°C | Max : {city.temp_max}°C
            </h4>
          </div>

          <div className="wave-one"></div>
          <div className="wave-two"></div>
          <div className="wave-three"></div>
        </div>
      )}
    </div>
  );
};

export default Temp;
