import React from 'react';
import "./homescreen.css";
import Nav from './Nav';
import Banner from './banner';
import Row from './Row';
import requests from '../Request';

const HomeScreen = () => {
    return ( 
        <div className = "homeScreen">
            
           <Nav/>
          
           <Banner/>
            <Row
            title = "NETFLIX ORIGINALS"
            fetchUrl = {requests.fetchNetflixOriginals}
            isLargeRow = {true}
            />
             <Row
            title = "Trending Now"
            fetchUrl = {requests.fetchTrending}
            />
             <Row
            title = "Top Rated"
            fetchUrl = {requests.fetchTopRated}
            />
             <Row
            title = "Action Movies"
            fetchUrl = {requests.fetchActionMovies}
            />
             <Row
            title = "Comedy MOvies"
            fetchUrl = {requests.fetchComedyMovies}
            />
             <Row
            title = "Horror Movies"
            fetchUrl = {requests.fetchHorrorMovies}
            />
             <Row
            title = "Romance Movies"
            fetchUrl = {requests.fetchRomanceMovies}
            />
             <Row
            title = "Documentaries"
            fetchUrl = {requests.fetchDocumentaries}
            />
        </div>
     );
}
 
export default HomeScreen;