import React from "react";
import CharacterStats from "./CharacterStats";
import PageNextAndBack from "./PageNextAndBack";


const ShowCharacters = (props) => { 
    const { characters, loading, page, totalPages, setPage } = props
    console.log('pesonagens aparecendo :', characters)

    const onLeftClickHandler = () => {
        if(page > 1){
            setPage((count) => count - 1)
        }
        console.log('volta')
    }

    const onRightClickHandler = () => {
        if(page <= totalPages){
            setPage((count) => count +  1)
        }
        console.log('avança')
    }
    return(
        <div>
            <PageNextAndBack page={page} totalPages={totalPages} onLeftClick={onLeftClickHandler} onRightClick={onRightClickHandler}/>
            <div className="container">
                
                <div className="container-character">{loading ? <div>carregando personagem</div> : 
                characters.map((characters) => {
                    return(
                        <CharacterStats character={characters}/>
                    )
                })}</div>
            </div>
        </div>
    )
}

export default ShowCharacters;