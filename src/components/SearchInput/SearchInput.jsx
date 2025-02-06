import './SearchInput.css';

export const SearchInput = () => {
  return (
    <div className="search-input-wrapper">
      <input
        className="search-input"
        type="search"
        placeholder="Search characters..."
      />
      <p className="seach-result">
        Found :<span className="search-result-value">0</span>
      </p>
    </div>
  );
};
