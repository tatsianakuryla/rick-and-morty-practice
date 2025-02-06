import './SearchInput.css';

export const SearchInput = () => {
  const handleInput = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="search-input-wrapper">
      <input
        className="search-input"
        type="search"
        placeholder="Search characters..."
        onInput={handleInput}
        autoFocus={true}
      />
      <p className="seach-result">
        Found :<span className="search-result-value">0</span>
      </p>
    </div>
  );
};
