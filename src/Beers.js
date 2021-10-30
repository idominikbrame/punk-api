import React, {useState} from "react";
import './App.css'


function Beers (props) {
    return  (

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
                <p>{beer.name}</p>
                <button className={isActive ? "liked" : "null"} onClick={() => {
                    handleToggle()
                    props.likeBeerMethod(beer)}}>
                    {value}
                </button>
            </li>
            )
        })}
        </ul>
    )
}

export default Beers