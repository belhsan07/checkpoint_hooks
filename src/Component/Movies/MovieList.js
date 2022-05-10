import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard';
import Modal2 from './Modal'
import "./MovieList.css"



export default function MovieList(props) {
    const [filter, setFilter] = useState(false);
    const [title, setTitle] = useState(false)
    const changeFilter = () => setFilter(!filter);
    const changeTitle = () => setTitle(!title);


    const [movieList, setMovieList] = useState([{
        title: "The Island (2005)",
        description: "A man living in a futuristic sterile colony begins to question his circumscribed existence when his friend is chosen to go to the Island, the last uncontaminated place on earth.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BMTAwNjk0NjM1ODReQTJeQWpwZ15BbWU3MDc1NjIxMzM@._V1_UY209_CR0,0,140,209_AL_.jpg",
        rating: 5
    },
    {
        title: "K.G.F: Chapter 2 (2022)",
        description: "Dans les champs aurifères imbibés de sang de Kolar, le nom de Rocky fait peur à ses ennemis. Alors que ses alliés l'admirent, le gouvernement le considère comme une menace pour la loi et l'ordre.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_UY209_CR2,0,140,209_AL_.jpg",
        rating: 3
    },
    {
        title: "Pam & Tommy (2022)",
        description: "Follows the story of Pamela Anderson and Tommy Lee's relationship, going back to their whirlwind romance that started with them marrying after only knowing each other for 96 hours in 1995.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BMmYyMTE3ZDItOGQwZC00ODgwLTkzN2YtOTIxNTI1Yjg0ZjE0XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_UX140_CR0,0,140,209_AL_.jpg",
        rating: 6
    },
 ]);
    useEffect(() => {
        console.log(movieList);

    }, [movieList])
    const filterByRate = () => {
        filter ? setMovieList(movieList.sort((a, b) => b.rating - a.rating)) : setMovieList(movieList.sort((a, b) => a.rating - b.rating));
    }
    const filterByTitle = () => {
        title ? setMovieList(movieList.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))) : setMovieList(movieList.sort((a, b) => (a.title > b.title) ? -1 : ((b.title > a.title) ? 1 : 0)))
    }
    return (



        <>
            <Modal2 movies={movieList} newList={(movie) => setMovieList(movie)} ></Modal2>
            <div className="btns">
                <button className="filter" onClick={() => { changeFilter(); filterByRate();}}>Filter By rank</button>
                <button className="title" onClick={() => { changeTitle(); filterByTitle() }}>Filter By Title</button>
            </div>
            <div className="list">
                {movieList.map(el => <MovieCard title={el.title} rating={el.rating} description={el.description} posterURL={el.posterURL} />
                )}
            </div>
        </>
    )
}