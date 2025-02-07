import { SearchInput } from './components/SearchInput/SearchInput.jsx';
import { CharactersList } from './components/CharactersList/CharactersList.jsx';
import { toUpperCase, fetchCards } from './utils/utils.js';
import { useEffect, useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [cards, setCards] = useState([]);
  const [searchCount, setSearchCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchValue.length <= 3) {
      setCards([]);
      setSearchCount(0);
      return;
    }

    setIsLoading(true);
    fetchCards(searchValue)
      .then((response) => {
        if (response.results) {
          setCards(
            response.results.map((result) => ({
              id: result.id,
              name: toUpperCase(result.name),
              status: toUpperCase(result.status),
              created: new Date(result.created).toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              }),
              url: result.url,
            })),
          );
          setSearchCount(response.results.length);
        } else {
          setCards([]);
          setSearchCount(0);
        }
      })
      .catch((error) => {
        console.error('Error occurred', error);
        setCards([]);
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
      <CharactersList cards={cards} />
    </>
  );
}

export default App;
