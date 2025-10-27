import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { AutoComplete } from 'primereact/autocomplete';
import "./Weather.css";
import useWeatherData from "./useWeatherData";

function Weather() {
    
    const {
        current_var,
        forecast,
        cityName,
        setCityName,
        items,
        search,
        fetchData,
    } = useWeatherData();

    return (
        <div className="weather-card">
            <div>
                 <AutoComplete value={cityName}
                               suggestions={items}
                               completeMethod={search}
                               field= "name" // kaze autocompletu da pokaze 'name' u dropdown-u
                               itemTemplate = {(prikaz) => <span>{prikaz.name}, {prikaz.region}, {prikaz.country}</span>} // sto da prikaze u dropdown-u
                               onSelect={(e) => {setCityName(e.value); console.log(e.value); fetchData(e.value.id)}}
                               onChange={(e) => {setCityName(e.value); console.log(e.value)}}
                               placeholder="Enter city name..." />
            </div>

            {/* Current weather */}
            <p className="location">📍{[current_var?.location?.name,
                                        current_var?.location?.region,
                                        current_var?.location?.country].filter(Boolean).join(", ")}</p>
            <p className="temp">{current_var?.current?.temp_c}°C</p>
            <p className="feels-like">Feels like: {current_var?.current?.feelslike_c}°C</p>
            <img src={current_var?.current?.condition?.icon} alt="Condition" />
            <p className="details">{current_var?.current?.condition?.text}</p>
            <p className="details">Humidity: {current_var?.current?.humidity}%</p>
            <p className="details">Wind: {current_var?.current?.wind_kph} km/h {current_var?.current?.wind_dir}</p>
            <p className="details">UV Index: {current_var?.current?.uv}</p>

            {/* Daily forecast */}
            {forecast?.forecast?.forecastday && (
                <div className="forecast-day">
                    <h3>Today’s Forecast</h3>
                    <p>🌡️ {forecast.forecast.forecastday[0].day.mintemp_c}°C - {forecast.forecast.forecastday[0].day.maxtemp_c}°C</p>
                    <p>💧 Chance of Rain: {forecast.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
                    <img
                      src={forecast.forecast.forecastday[0].day.condition.icon}
                      alt="Day condition"
                    />
                    <p>{forecast.forecast.forecastday[0].day.condition.text}</p>
                </div>
            )}

            {/* Sljedecih 6h */}
            {forecast?.location && forecast?.forecast.forecastday?.[0]?.hour && (() => {
            const currentHour = new Date(forecast.location.localtime).getHours();
            const hours = forecast.forecast.forecastday[0].hour;
            const startIndex = hours.findIndex((h: any) => new Date(h.time).getHours() === currentHour);
            const safeIndex = startIndex === -1 ? 0 : startIndex;
            const nextHours = hours.slice(safeIndex, safeIndex + 6);
            return  (
                <div className="forecast-hourly">
                    <h3>Next Hours</h3>
                    <div className="hourly-list">
                        {nextHours.map((h: any) => (
                            <div className="hour" key={h.time_epoch}>
                                <p>{h.time.split(" ")[1]}</p>
                                <img src={h.condition.icon} alt="hour condition" />
                                <p>{h.temp_c}°C</p>
                                <p>{h.chance_of_rain}% 🌧️</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
            })()}
            {forecast?.forecast?.forecastday?.[0]?.hour && (
                <div className="forecast-table">
                    <h3>🌤️ 24-Hour Forecast</h3>
                    <DataTable
                        value={forecast.forecast.forecastday[0].hour}
                        showGridlines
                        stripedRows
                        tableStyle={{ minWidth: '45rem', backgroundColor: 'white', borderRadius: '8px' }}
                        paginator
                        rows={6}
                        >   
                        <Column field="time" header="Time" body={(rowData) => (
                          <span>{rowData.time.split(" ")[1]}</span>
                        )}></Column>

                        <Column field="temp_c" header="Temp (°C)"></Column>
                      
                        <Column header="Condition" body={(rowData) => (
                          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <img src={rowData.condition.icon} alt="icon" width="35" />
                            <span>{rowData.condition.text}</span>
                          </div>
                        )}></Column>

                        <Column field="humidity" header="Humidity (%)"></Column>
                        <Column field="chance_of_rain" header="Chance of Rain (%)"></Column>
                        <Column field="wind_kph" header="Wind (km/h)"></Column>
                    </DataTable>
                </div>
            )}
        </div>
    );
}

export default Weather;