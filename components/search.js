import axios from 'axios';
import React, {useState} from 'react';
import DisplayPokemon from './displaypokemon'

const Search = (props) => {
    //logic of component

    //create state

    //pokemon es la variable
    // setPokemon es la funcion para asignar el valor de la variable
    // lo que esta dentro de useState, es el valor incial
    const [text, setText] = useState('');
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState('')


    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleSubmit = async (event) => {
        const url = "https://pokeapi.co/api/v2/pokemon/"+text
        try {
            let response = await axios.get(url)
            //parsing 

            let pokemonData = {
                id: response.data.id, 
                name: response.data.name,
                type: response.data.types[0].type.name,
                imgUrl: `https://pokeres.bastionbot.org/images/pokemon/${response.data.id}.png`
            }


            setPokemon(pokemonData)
            setError('')
            console.log("pokemon data =>", pokemonData)      
        } catch (error) {
            setError("Cant find pokemon, try again")
            setPokemon(null)
            console.log("error =>", error)
        }
       
    }
    
    //obtener valor del texto DONE
    // click boton DONE
    // buscar en api  DONE 
    //mostrar resultados
  

    return ( 
        <div className="searchcontainer">
            <input type="text" placeholder="Type your pokemon" value={text} onChange={ (event) =>  handleChange(event) }/>
            <button onClick={(event) => handleSubmit(event)}>Search Pokemon</button>
            <DisplayPokemon error={error} data={pokemon}/>
        </div>
     );
}
 
export default Search;