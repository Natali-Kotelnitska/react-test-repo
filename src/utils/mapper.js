export default function mapper(array) {
  return array.map(({ backdrop_path: img, id, title }) => ({
    img,
    id,
    title,
    isWatched: false,
  }));
}

// export default function mapper(array) {
//   return array.map(({ backdrop_path: img, id, title }) => ({
//     img,
//     id,
//     title,
//     isWatched: false,
//   }));
// }
