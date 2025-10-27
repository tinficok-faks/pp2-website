import { useState } from "react";
import axios from "axios";
import { type AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import type { currentWeatherType } from "./api/current-weather-api"
import type { SearchResultType } from "./api/search-city-api";

export default function useWeatherData() {
    
    const API_KEY = "8b846b54ef904e0ea2c74702250110";

    const [current_var, setCurrent] = useState<currentWeatherType>();
    const [forecast, setForecast] = useState<any>();
    const [cityName, setCityName] = useState<SearchResultType | undefined>();
    const [items, setItems] = useState<SearchResultType[]>([]);
    
    const search = (event: AutoCompleteCompleteEvent) => {
        console.log(event.query);
        axios.get(`https://api.weatherapi.com/v1/search.json?q=${event.query}&key=${API_KEY}`)
        .then(response => {setItems(response.data)})
        .catch(errorMsg => {console.log(errorMsg)})
    }
    
    const fetchData = async (id:number) => {
        if (!id) return;
        try {
            await Promise.all([
                axios.get(`https://api.weatherapi.com/v1/current.json?q=id:${id}&key=${API_KEY}`)
                .then(response => {setCurrent(response.data);
                    console.log(response.data);
                })
                .catch(errorMsg => {console.log(errorMsg)}),
            
                axios.get(`https://api.weatherapi.com/v1/forecast.json?q=id:${id}&days=1&key=${API_KEY}`)
                .then(future_var => {setForecast(future_var.data);
                    console.log(future_var.data);
                })
                .catch(errorMsg => {console.log(errorMsg)})
            ]);
        } catch (error) {
            console.error("Enter fetching data:", error);
        }
    };

    return {
        current_var,
        forecast,
        cityName,
        setCityName,
        items,
        search,
        fetchData,
    }
}
