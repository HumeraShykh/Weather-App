import "./InformationBox.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InformationBox({ info }){
    const init_URL = "https://images.unsplash.com/photo-1531224127972-4b10c9eae19e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://th.bing.com/th/id/R.3deee3bcf637f92b898fa27838126be4?rik=WrkaHJIg3bic%2bA&pid=ImgRaw&r=0"
    const COLD_URL = "https://th.bing.com/th/id/R.67f58676fa8b84116563d1c325439f7d?rik=ujdTv%2fnS2Md68Q&pid=ImgRaw&r=0"
    const RAIN_URL = "https://th.bing.com/th/id/OIP.84BKGIzBhaCetdzRUhQfxAAAAA?rs=1&pid=ImgDetMain"
    return(
        <div className="information-box">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity > 50 
        ? RAIN_URL 
        : info.temp > 20
        ? HOT_URL
        : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity > 50 
        ? <ThunderstormIcon />
        : info.temp > 20
        ? <WbSunnyIcon />
        : <AcUnitIcon />
       
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p><b>Temperature = </b>{info.temp}&deg;C</p>
          <p><b>Humidity = </b>{info.humidity}</p>
          <p><b>Pressure = </b>{info.pressure}</p>
          <p>The weather can be described as <b> <i>{info.description}</i> </b>and <b>Feels Like = </b>{info.feelsLike}&deg;C</p>
          </Typography>
      </CardContent>
      
      
    </Card>
    </div>
        </div>

    )
}