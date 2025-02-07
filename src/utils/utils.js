export function toUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function fetchCards(searchValue) {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
    .then((response) => {
      if (!response.ok) {
        return response.json().then((errorData) => {
          console.log('Character is not found');
          return {
            results: [],
            errorData: errorData.error || 'Character is not found',
          };
        });
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Network or server error:', error);
      return { results: [], error: 'Network or server error' };
    });
}
