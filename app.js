const URL = "https://rickandmortyapi.com/api/character";

//1: función que dispara cuando la ventana este cargada.
window.onload = () => {
    init();
}

//1.2: Función que dispara todo.
const init = async () => {
    //esperar a coger los personajes
    const characters = await getCharacters();
    //mapear los personajes
    mappedCharacters(characters);
}

//2: Conseguir los personajes.
const getCharacters = async () => {
    //petición a la API
    const received = await fetch(URL);
    //se convierte a json
    const receivedToJson = received.json();
    //retornar la conversión
    return receivedToJson;
}

//3:Mapear los personajes
const mappedCharacters = async (characters) => {
    characters.results.map((character)=>{
        return printCharacters({
            name: character.name,
            image: character.image,
            status: character.status,
            gender: character.gender,
            location: character.location.name,
        });
    })
}

//4:Imprimimos lo que queremos
const printCharacters = async (character) => {
    const myFigure = document.querySelector("#charactersContainer");
    myFigure.innerHTML += `
    <div class="figure-container">
        <h2>${character.name}</h2>
        <div>
            <img src="${character.image}" alt="${character.name}">
        </div>
        <p>Status: ${character.status}</p>
        <p>Location: ${character.location}</p>
        <p>Gender: ${character.gender}</p>
    </div>
    `
}
