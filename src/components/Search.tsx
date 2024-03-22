interface Props {
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: React.SyntheticEvent) => void;
  search: string | undefined;
}

const Search = ({ search, handleSearchChange, onSearchSubmit }: Props) => {
  //   console.log(import.meta.env.VITE_API_KEY);

  return (
    // <div>
    //   <input type="text" value={search} onChange={handleChange} />
    //   <button onClick={handleClick}>West Side</button>
    // </div>
    <form onSubmit={onSearchSubmit}>
      <input value={search} onChange={handleSearchChange} />
      <button type="submit">Search</button>
    </form>
  );
};
export default Search;
