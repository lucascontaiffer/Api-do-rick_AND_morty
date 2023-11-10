import React, { useState } from "react";
import img from '../img/Rick-And-Morty-Logo.png'

const LogoHeader = (props) => {
    const [search, setSearch ] = useState('')
    const { onSearch } = props;

    const onChangeHandler = (e) => {
        setSearch(e.target.value)

        // retorna para página inicial quando o input está vazio
        if(e.target.value.length === 0){
            onSearch(undefined)
        }
    }

    const onButtonClickHandler= () => {
        onSearch(search)
    }
   
    return(
        <div className="header">
            <img className="logoImg" src={img}/>
            <div>
                <input 
                type="text"
                placeholder="Personagem"
                onChange={onChangeHandler}/>
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
        </div>
    )
}

export default LogoHeader;