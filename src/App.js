import React from 'react';
import './App.css';
import Row from './Row';
import Request from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" subUrl={Request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending" subUrl={Request.fetchTreding} isLargeRow/>
      <Row title="Top Rated" subUrl={Request.fetchTopRated} isLargeRow/>
      <Row title="Action Movies" subUrl={Request.fetchActionMovies} isLargeRow/>
      <Row title="Comedy Movies" subUrl={Request.fetchComedyMovies} isLargeRow/>
      <Row title="Horror Movies" subUrl={Request.fetchHorrorMovies} isLargeRow/>
      <Row title="Romantic Movies" subUrl={Request.fetchRomanticMovies} isLargeRow/>
      <Row title="Documentaries" subUrl={Request.fetchDocumentaries} isLargeRow/>
    </div>
  );
}

export default App;
