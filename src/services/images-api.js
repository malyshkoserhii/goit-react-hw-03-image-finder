import axios from 'axios';

const key = '18518367-60788b25c9bdd8e2c754a390a';
const baseUrl = 'https://pixabay.com/api/';

async function fetchImages({
  searchQuery = '',
  currentPage = 1,
  perPage = 10,
}) {
  try {
    const response = await axios.get(
      `${baseUrl}?q=${searchQuery}&page=${currentPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    );
    const hits = await response.data.hits;

    return hits;
  } catch (error) {
    throw error;
  }
}

export default fetchImages;
