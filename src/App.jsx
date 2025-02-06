import './App.css';
import { SearchInput } from './components/SearchInput/SearchInput.jsx';
import { CharactersList } from './components/CharactersList/CharactersList.jsx';
import { toUpperCase } from './utils/utils.js';

let cards = [
  {
    id: 1,
    name: 'Rick Mortivich',
    status: 'Alive',
    created: '17.01.2024',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  {
    id: 2,
    name: 'Rick Mortivich',
    status: 'Alive',
    created: '17.01.2024',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  {
    id: 3,
    name: 'Rick Mortivich',
    status: 'Alive',
    created: '17.01.2024',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  {
    id: 4,
    name: 'Rick Mortivich',
    status: 'Alive',
    created: '17.01.2024',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  {
    id: 5,
    name: 'Rick Mortivich',
    status: 'Alive',
    created: '17.01.2024',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  {
    id: 6,
    name: 'Rick Mortivich',
    status: 'Alive',
    created: '17.01.2024',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  {
    id: 7,
    name: 'Rick Mortivich',
    status: 'Dead',
    created: '17.01.2024',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  {
    id: 8,
    name: 'Rick Mortivich',
    status: 'Dead',
    created: '17.01.2024',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
];

function getCards({ id, name, status, created }) {
  cards.push({
    id: id,
    name: toUpperCase(name),
    status: toUpperCase(status),
    created: new Date(created).toLocaleDateString('ru-Ru', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
  });
}

function App() {
  return (
    <>
      <SearchInput />
      <CharactersList cards={cards} />
    </>
  );
}

export default App;
