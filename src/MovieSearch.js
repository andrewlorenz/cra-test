import { useState } from 'react';

const MovieItem = ({ movie }) => {
    // some logic
    return (
        <tr id={movie.imdbID}>
        <td>{movie.Title}</td>
        <td>{movie.Year}</td>
        <td><img src={movie.Poster} alt="poster" /></td>
      </tr>
    )

}

const MovieSearch = () => {

  const [ movieTitle,   setMovieTitle   ] = useState('');
  const [ movieData,    setMovieData    ] = useState([]);
  const [ totalResults, setTotalResults ] = useState(0);
  const [ fetchStatus,  setFetchStatus  ] = useState(null);

  const onChangeMovieTitle = (evt) => setMovieTitle(evt.target.value);

  const onSubmit = async (evt) => {
    evt.preventDefault();
    console.log('onSubmit');

    const queryURL = "https://www.omdbapi.com/?s=" + movieTitle + "&y=&plot=short&apikey=trilogy";
    console.log('queryURL', queryURL);
    setFetchStatus("please wait");
    const response = await fetch(queryURL);
    if (response.ok) {
        // HTTP status is 200-299
        const movieData = await response.json();
        setTotalResults(movieData.totalResults);
        setMovieData(movieData.Search);
        console.log('movieData', movieData);
    } else {
        console.log("fetch error", response.status)
    }
    
    setFetchStatus("here are your results!");
}

  return (
    <div className="container">
        <h1>Movie Search</h1>

        <p>Enter a movie title to search for</p>
        <form id="movie-search">
        <input type="text" value={movieTitle} onChange={onChangeMovieTitle} />
        <button type="submit" onClick={onSubmit}>Search</button>  
        </form>
        {fetchStatus && (
          <p>{fetchStatus}</p>
        )}

        <h3>Results</h3>
        <table className="table movie-results">
        <thead>
            <tr>
            <th>Movie Name</th>
            <th>Year</th>
            <th>Poster</th>
            </tr>
        </thead>
        <tbody>
          {movieData.map(movie => (
            <MovieItem ckey={movie.imdbID} movie={movie} />
          ))}
        </tbody>
        </table>
        <p>Total results = {totalResults}</p>
    </div>
  );
}

export default MovieSearch;
