import React from "react";
import { Card } from "react-bootstrap";
const Player=(props)=>{
return(
    <div >
    <Card>
       <p>{props.name}</p>
       <p>{props.equipe}</p>
       <p>{props.nationalite}</p>
       <p>{props.numero}</p>
       <p>{props.age}</p>
       <p>{props.url}</p>
    </Card>
   </div>
)
}
export default Player