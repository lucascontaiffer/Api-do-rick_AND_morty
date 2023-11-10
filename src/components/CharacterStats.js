import React from "react";

const CharacterStats = (props) => {
    const { character } = props

    return(
        <div className="character-div">         
            <div>
                <div className={character.status  === 'Alive' ? 'alive-status' : character.status  === 'Dead' ? 'dead-status' : character.status  === 'unknown' ? 'unknown-status' : 'other'}>{character.status}</div>
                <img className="img-character" src={character.image}/>                               
            </div>     
            <div>
                <h2>{character.name}</h2>
                <h4>{character.species}</h4> 
            </div>      
        </div>
    )
}

export default CharacterStats;