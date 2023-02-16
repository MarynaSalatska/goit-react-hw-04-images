import axios from 'axios';
axios.defaults.baseURL = `https://pixabay.com/api/`;


export async function getAlbumsService({query, page, perPage}) {
  const { data } = await axios.get(
    `?key=32848504-113b5416049b5c8ff07c52596&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`
  );
  return data;
}
