import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css';
import movieTrailer from 'movie-trailer';
const baseUrl= 'https://image.tmdb.org/t/p/original/';

function Row({title, subUrl, isLargeRow}) {

    const [movies, setMovies]= useState([]);
    const [trailerUrl, setTrailerUrl]= useState("");

    useEffect(() => {
        async function fetchData() {
            const req= await axios.get(subUrl);
            //console.log(req.data.results);
            setMovies(req.data.results);
            return req;
        }
        fetchData();
    }, [subUrl]);
   // console.log(movies);

    const opts= {
        height: "390",
        width: "100%",
        playerVars: {

            autoplay: 1,
        },
    };

    const handleClick= (movie)=> {
        if(trailerUrl==movie) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
            .then((url)=> {
                const urlParams= new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error)=> console.log(error));
        }
    }
    console.log(trailerUrl);
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie=> (
                    <img key={movie.id} onClick={()=> handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                        src={`${baseUrl}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt={`${baseUrl}${movie.name}`}/>
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;