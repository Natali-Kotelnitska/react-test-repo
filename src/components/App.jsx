// import logo from './logo.svg';
// import React, { Component } from "react";
// import movies from "./components/base/data.json";
import { useState, useEffect } from 'react';
import mapper from 'utils/mapper';
import Button from './Button/button';
import { GalleryList } from './Gallery/GalleryList';
import { getMovies } from 'services/api';
import Modal from './Modal/Modal';
// import Modal from './components/Modal/Modal';
// import './App.css';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState('');

  useEffect(() => {
    setIsloading(true);
    getMovies(page)
      .then(results => {
        const nextMovies = mapper(results);
        setMovies(prevMovies => [...prevMovies, ...nextMovies]);
      })
      .catch(error => console.log(error))
      .finally(() => setIsloading(false));
  }, [page]);

  const onClick = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  const openModal = image => {
    setImage(image);
  };

  const closeModal = () => {
    setImage('');
  };
  // const toggleWatched = (id) => {
  //   setMovies((prevState) => ({
  //     prevState.movies.map((movie) => {
  //       if (movie.id === id) {
  //         return {
  //           ...movies,
  //           isWatched: !movie.isWatched,
  //         };
  //       }
  //       return movie;
  //     }),
  //   }));
  // };

  return (
    <>
      <GalleryList
        movies={movies}
        openModal={openModal}
        // toggleWatched={toggleWatched}
      />
      {isLoading && <h1>Loading ...</h1>}
      <Button onClick={onClick} />
      {image && <Modal img={image} closeModal={closeModal} />}
      {/* <Button showFilms={this.showFilms} isShown={isShown} />
      {isShown && (
        <GalleryList movies={movies} toggleWatched={this.toggleWatched} />
      )} */}
    </>
  );
}

// Classes
// state = {
//   // movies: mapper(movies),
//   movies: "",
//   isShown: false,
// };

// showFilms = () => {
// this.setState((prevState) => ({
//   isShown: !prevState.isShown,
// }));
// };

// toggleWatched = (id) => {
// this.setState((prevState) => ({
//   movies: prevState.movies.map((movie) => {
//     if (movie.id === id) {
//       return { ...movie, isWatched: !movie.isWatched };
//     }
//     return movie;
//   }),
// }));
// };

// render() {
// const { isShown, movies } = this.state;
