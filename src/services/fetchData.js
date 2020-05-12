const ENDPOINT = 'https://api.punkapi.com/v2/beers/';
const fetchData = () => fetch(ENDPOINT).then(response => response.json());

export default fetchData