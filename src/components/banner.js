import React, { useEffect } from 'react';
import { useState } from 'react';
import "./banner.css";
import axios from "../axios";
import requests from "../Request";
const url = "https://d107a8nc3g2c4h.cloudfront.net/images/blog/wp-content/uploads/Xclussive-US-Netflixbanner-bg.jpg";

const Banner = () => {

    const [movie ,setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
           const request = await axios.get(requests.fetchNetflixOriginals);
           setMovie(
               request.data.results[
                   Math.floor(Math.random() * request.data.results.length-1)
               ]
           );
           return request;
        }

        fetchData();

    },[]);

    console.log(movie);

    function truncate(string ,n){
      return string ?.length > n  ? string.substr(0, n-1) +"...." : string;
    }

    return ( 
        <header className = "banner" 
        style = {{
            backgroundSize:"cover",
            backgroundImage :`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition : "center center"
        }}>
           <div className="banner__contents">
               <h1 className = "banner__title">
                {movie?.title || movie?.name || movie?.original_name}
               </h1>
               <div className="banner__buttons">
                   <button className = 'banner__button'>Play</button>
                   <button className = 'banner__button'>My list</button>
               </div>
               <h1 className="banner__description">
               {truncate(movie?.overview,150)}
              </h1>
           </div>
          

           <div className="banner--fadeBottom"/>
        </header>
     );
}                
 
export default Banner;
