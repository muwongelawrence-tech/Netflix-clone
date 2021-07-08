import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./Row.css";
import axios from "../axios";

 const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({title ,fetchUrl, isLargeRow = false}) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
      async function fetchData(){
          const request = await axios.get(fetchUrl);
          setMovies(request.data.results);
          return request;
      }

      fetchData();

    },[fetchUrl]);

    return (
        <div className = "row">
              <h2>{title}</h2>

              <div className="row__posters">
                {movies.map(movie => (
                  <img
                  key = {movie.id}
                  className = {`row__poster ${isLargeRow && "row__posterLarge"}`} 
                  src={`${baseUrl}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`} alt=""/>
                ))}
              </div>

           
        </div>
    )
}

export default Row
