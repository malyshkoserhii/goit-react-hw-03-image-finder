const key = '18518367-60788b25c9bdd8e2c754a390a';
const baseUrl = 'https://pixabay.com/api/';

const fetchImages = ({ searchQuery = '', currentPage = 1, perPage = 5 }) => {
  return fetch(
    `${baseUrl}?q=${searchQuery}&page=${currentPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`Your query about ${searchQuery} is not found`),
    );
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchImages };
