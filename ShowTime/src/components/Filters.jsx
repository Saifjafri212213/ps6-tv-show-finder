function Filters({ genre, setGenre }) {
  return (
    <div>
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="all">All Genres</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="Action">Action</option>
        <option value="Crime">Crime</option>
        <option value="Thriller">Thriller</option>
        <option value="Science-Fiction">Science-Fiction</option>
        <option value="Horror">Horror</option>
        <option value="Romance">Romance</option>
      </select>
    </div>
  );
}

export default Filters;
