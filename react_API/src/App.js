import React, { useState, useCallback, useEffect } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHandler = useCallback(async() => {
    try {
      setLoading(true);
      const response = await fetch('https://react-very-first-default-rtdb.europe-west1.firebasedatabase.app/movies.json');
      
      //Check if an error occured
      if(!response.ok) {
        throw new Error('An error occured');
      }
      
      //If there is no error
      const data = await response.json();

      const loadedMovies = [];

      for(const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText
        }); 
      }

      setMovies(loadedMovies);
    } catch(error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  const addMovieHandler = async(movie) => {
    const response = await fetch('https://react-very-first-default-rtdb.europe-west1.firebasedatabase.app/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  };

  let content = <p></p>;
  if(!loading && movies.length>0) {
    content = <MoviesList movies={movies} />;

  } else if(!loading && movies.length===0 && !error) {
    content = <p>No movies found.</p>;

  } else if(!loading && error) {
    content = <p>{error}</p>;

  } else {
    content = <p>Loading...</p>
  }


  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
