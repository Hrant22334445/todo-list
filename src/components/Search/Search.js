import './Search.css';

const Search = () => {
    return (
    <div className='search'>
      <input type='text' placeholder='Type for search...' />
      <button className='search-btn-all'>All</button>
      <button className='search-btn-done'>Done</button>
      <button className='search-btn-important'>Important</button>
      </div>
    );
  }

  export default Search;

