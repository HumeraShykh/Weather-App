import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="ca87b38e68c9d1fbc8174bc5bd4117c5";
    let getWhetherinfo = async () =>{
        try{
        let response =  await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse=  await response.json();
       console.log(jsonResponse)
       let result = {
        city:city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        pressure: jsonResponse.main.pressure,
        description: jsonResponse.weather[0].description,
       };
       console.log(result);
       return result;
        }
        catch(err){
        throw err;
        }
        

    }
    

    let handChange=(evt)=>{
    setCity(evt.target.value);
    };
    let handleSubmit = async (evt) =>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newinfo = await getWhetherinfo();
        updateInfo(newinfo);
        }
        catch(err){
            setError(true);
        }
    }
    return (
    <div className='searchBox'>
   
    <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name: " variant="outlined" required
         value={city}
            onChange={handChange}
         />
        <br></br>
        <br></br>
        <Button variant="contained" type='submit'>
    Search
    </Button>
    {error && <p style={{color: "red"}}>No such place exists!</p>}

</form>
        
      
    </div>
    );
}