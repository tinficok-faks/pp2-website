export interface forecastWeatherType {
    current?: currentType;
    forecast?: forecastType;
    location?: locationType;
}

interface currentType {
    cloud: number;
    condition?: conditionType;
    dewpoint_c: number;
    dewpoint_f: number;
    diff_rad: number;
    dni: number;
    feelslike_c: number;
    feelslike_f: number;
    gti: number;
    gust_kph: number;
    gust_mph: number;
    heatindex_c: number;
    heatindex_f: number;
    humidity: number;
    is_day: number;
    last_updated: string
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    short_rad: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
    windchill_c: number;
    windchill_f: number;
}

interface conditionType {
    code: number;
    icon: string;
    text: string;
}

interface locationType {
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: number;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
}

interface forecastType {
    forecastday?: forecastdayType[];
}

interface forecastdayType {
    astro?: astroType;
    date: string;
    date_epoch: number;
    day?: dayType;
    hour?: hourType[];
}

interface astroType {
    is_moon_up: number;
    is_sun_up: number;
    moon_illumination: number;
    moon_phase: string;
    moonrise: string;
    moonset: string;
    sunrise: string;
    sunset: string;
}

interface dayType {
    avghumidity: number;
    avgtemp_c: number;
    avgtemp_f: number;
    avgvis_km: number;
    avgvis_miles: number;
    condition: conditionType;
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
    daily_will_it_rain: number;
    daily_will_it_snow: number;
    maxtemp_c: number;
    maxtemp_f: number;
    maxwind_kph: number;
    maxwind_mph: number;
    mintemp_c: number;
    mintemp_f: number;
    totalprecip_in: number;
    totalprecip_mm: number;
    totalsnow_cm: number;
    uv: number;
}

interface hourType {
    chance_of_rain: number;
    chance_of_snow: number;
    cloud: number;
    condition?: conditionType;
    dewpoint_c: number;
    dewpoint_f: number;
    diff_rad: number;
    dni: number;
    feelslike_c: number;
    feelslike_f: number;
    gti: number;
    gust_kph: number;
    gust_mph: number;
    heatindex_c: number;
    heatindex_f: number;
    humidity: number;
    is_day: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    short_rad: number;
    snow_cm: number;
    temp_c: number;
    temp_f: number;
    time: string;
    time_epoch: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    will_it_rain: number;
    will_it_snow: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
    windchill_c: number;
    windchill_f: number;
}