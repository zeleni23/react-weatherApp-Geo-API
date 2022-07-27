import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temerature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parametar-row">
            <span className="parametar-label"> Details</span>
          </div>
          <div className="parametar-row">
            <span className="parametar-label"> Feels like</span>
            <span className="parametar-value">
              {Math.round(data.main.feels_like)}
            </span>
          </div>
          <div className="parametar-row">
            <span className="parametar-label">Wind </span>
            <span className="parametar-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parametar-row">
            <span className="parametar-label">Hummidity </span>
            <span className="parametar-value">{data.main.humidity} %</span>
          </div>
          <div className="parametar-row">
            <span className="parametar-label">Pressure </span>
            <span className="parametar-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
