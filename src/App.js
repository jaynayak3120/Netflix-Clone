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
      <Row title="Trending" subUrl={Request.fetchTreding}/>
      <Row title="Top Rated" subUrl={Request.fetchTopRated}/>
      <Row title="Action Movies" subUrl={Request.fetchActionMovies}/>
      <Row title="Comedy Movies" subUrl={Request.fetchComedyMovies}/>
      <Row title="Horror Movies" subUrl={Request.fetchHorrorMovies}/>
      <Row title="Romantic Movies" subUrl={Request.fetchRomanticMovies}/>
      <Row title="Documentaries" subUrl={Request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
