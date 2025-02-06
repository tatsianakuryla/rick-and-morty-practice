import './CharacterCard.css';

export const CharacterCard = ({ name, status, created }) => {
  return (
    <>
      <h3 className="character__name">{name}</h3>
      <div className="character__details flex">
        <p className="character__status">
          Status:{' '}
          <span
            className={`character__status-value character__status-value_${status.toLowerCase()}`}
          >
            {status}
          </span>
        </p>
        <p className="character__created">
          Created: <span className="character__created-value">{created}</span>
        </p>
      </div>
    </>
  );
};
