import s from './Modal.module.css';
import { useState, useEffect } from 'react';

const Modal = ({ img, closeModal }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const escapeHandler = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', escapeHandler);
    return () => {
      window.removeEventListener('keydown', escapeHandler);
    };
  });

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <div className={s.overlay}>
      <img
        src={`https://image.tmdb.org/t/p/w780/${img}`}
        alt=""
        onLoad={onLoad}
        style={{ display: loaded ? 'block' : 'none' }}
      />
      {!loaded && (
        <h1 style={{ color: 'white', fontSize: 50 }}> Loading ...</h1>
      )}
    </div>
  );
};
export default Modal;
