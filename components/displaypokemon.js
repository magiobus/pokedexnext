const DisplayPokemon = (props) => {

    let pokemon = props.data
    let error = props.error

    return ( 
        <>
            <div className="pokemonData">

                {error && (
                    <p>{error}</p>
                )}


                {pokemon !== null && (
                    <>
                        <p>Id: {pokemon.id}</p>
                        <p>Pokemon: {pokemon.name}</p>
                        <p>Type: {pokemon.type}</p>
                        <img src={pokemon.imgUrl} />
                    </>

                )}
            </div>
        </>
     );
}
 
export default DisplayPokemon;