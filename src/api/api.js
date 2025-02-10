export async function findCharactersByName(name) {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${name}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Server responded with with status: ${response.status}.`);
    },
  );
}
