import { SearchInput } from './components/SearchInput/SearchInput.jsx';
import { CharactersList } from './components/CharactersList/CharactersList.jsx';
import { toUpperCase } from './utils/utils.js';
import { findCharactersByName } from './api/api.js';
import { useEffect, useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [characters, setCharacters] = useState([]);
  const [searchCount, setSearchCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchValue.trim().length <= 3 || searchValue.trim() === '') {
      setCharacters([]);
      setSearchCount(0);
      return;
    }

    setIsLoading(true);
    findCharactersByName(searchValue)
      .then((response) => {
        if (!response.results || response.results.length === 0) {
          throw new Error('Characters have not found');
        }
        setCharacters(
          response.results.map(({ id, name, status, created, url }) => ({
            id: id ?? 'Unknown',
            name: name ? toUpperCase(name) : 'Unknown',
            status: status ? toUpperCase(status) : 'Unknown',
            created: created
              ? new Date(created).toLocaleDateString('ru-RU', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })
              : 'Unknown',
            url: url ?? '#',
          })),
        );
        setSearchCount(response.results.length);
      })
      .catch((error) => {
        console.error(error.message);
        setCharacters([]);
        setSearchCount(0);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchValue]);

  return (
    <>
      <SearchInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchCount={searchCount}
        isLoading={isLoading}
      />
      <CharactersList characters={characters} />
    </>
  );
}

export default App;
