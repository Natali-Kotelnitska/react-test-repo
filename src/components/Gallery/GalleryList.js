import { GalleryListItem } from './GalleryListItem';
import propTypes from 'prop-types';
import s from './Gallery.module.css';

// export const GalleryList = ({ movies, toggleWatched }) => {
export const GalleryList = ({ movies, openModal }) => {
  return (
    <ul className={s.galleryList}>
      {movies.map(({ img, title, id, isWatched }) => (
        <GalleryListItem
          key={id}
          img={img}
          title={title || 'The best movie ever'}
          id={id}
          onClick={openModal}
          isWatched={isWatched}
          // toggleWatched={toggleWatched}
        />
      ))}
    </ul>
  );
};

GalleryList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      img: propTypes.string.isRequired,
      title: propTypes.string,
      id: propTypes.number.isRequired,
      isWatched: propTypes.bool.isRequired,
    })
  ),
  openModal: propTypes.func.isRequired,
  // toggleWatched: propTypes.func.isRequired,
};
