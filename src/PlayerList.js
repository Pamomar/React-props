import React from "react";
import Player from "./player";
import players from "./players";

function PlayerList()
{
 return(
    players.map(joueur=><Player name={joueur.name}
        equipe={joueur.equipe}
        nationalite={joueur.nationalite}
        numero={joueur.numero}
        age={joueur.age}
        url={joueur.url} />)
 )
}