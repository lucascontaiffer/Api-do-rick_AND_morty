export const getCharacters = async (index) =>{
    try{
        const url = `https://rickandmortyapi.com/api/character/?page=${index}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("Error in apis.js", error)
    }
}

export const searchCharacter = async (name) =>{
    try{
        const url = `https://rickandmortyapi.com/api/character/?name=${name}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("Error in apis.js", error)
    }
}

