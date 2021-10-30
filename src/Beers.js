import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import './App.css'


function Beers (props) {
    return  (
        <div className={"App-header"}>
        <h1>Beer World Items </h1>
        <ul>

            {props.beers.map((beer) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const [isActive, setActive] = useState(false);
                const handleToggle = () => {
                    setActive(!isActive);
                };
                let value = ""
                if(props.likes.includes(beer.name)){
                    value = "Liked"
                } else {
                    value = "Like"
                }
            return (
            <li key={beer.id}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent style={{backgroundColor: "lightcoral"}}>
                        </CardContent>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {beer.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {beer.tagline}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <button className={isActive ? "liked" : "null"} onClick={() => {
                            handleToggle()
                            props.likeBeerMethod(beer)}}>
                            {value}
                        </button>
                    </CardActions>
                </Card>
            </li>
            )
        })}
        </ul>
        </div>
    )
}

export default Beers