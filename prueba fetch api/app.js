const url = 'https://rickandmortyapi.com/api/character'

fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
