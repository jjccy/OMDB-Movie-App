import { useState, useRef } from "react";

// components
import SearchBox from './components/SearchBox/SearchBox';
import GridList from './components/GridList/GridList';

// css
import './_App.scss';



function App() {
  const baseUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=ce0644f4";
  const movieGridList = useRef(null)
  const [searching, setSearching] = useState(false);

  const onButtonSearch = (value) => {
    console.log(value || "");
    setSearching((value || "") !== "");
    movieGridList.current.getMovies(value);
  }

  
  return (
    <>
      <div className={`main-container ${searching ? "searching" : ""}`}>
        <SearchBox 
          label='Search movies' 
          onSerach={onButtonSearch}
          className='search-box'
        />
        {
          !searching && 
          <div className="serch-hint">
            Search for anything
          </div>
        }
        <GridList 
          baseUrl= {baseUrl}
          ref={movieGridList}
          className='movie-grid-list'
        />
      </div>
    </>
  );
}

export default App;
