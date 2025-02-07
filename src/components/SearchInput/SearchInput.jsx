import './SearchInput.css';

export const SearchInput = ({
  searchValue,
  setSearchValue,
  searchCount,
  isLoading,
}) => {
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search-input-wrapper">
      <input
        className="search-input"
        type="search"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search characters..."
        autoFocus
      />
      {searchValue.length > 3 ? (
        <p className="search-result">
          {isLoading ? (
            'Loading...'
          ) : (
            <>
              Found characters:
              <span className="search-result_count">{searchCount}</span>
            </>
          )}
        </p>
      ) : null}
    </div>
  );
};
