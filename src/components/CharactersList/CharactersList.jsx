import './CharactersList.css';
import { CharacterCard } from '../CharacterCard/CharacterCard.jsx';

export const CharactersList = ({ characters }) => {
  return (
    <>
      {characters.length > 0 ? (
        <ul className="characters-list flex">
          {characters.map(({ id, name, status, created, url }) => (
            <li className="character" key={id}>
              <a className="character__link flex" href={url} target="_blank">
                <CharacterCard name={name} created={created} status={status} />
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
