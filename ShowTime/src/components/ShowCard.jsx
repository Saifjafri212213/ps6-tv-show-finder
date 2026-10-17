import { Link } from "react-router";

function ShowCard({ show }) {
  return (
    <div>

      {show.image && (
        <img
          src={show.image.medium}
          alt={show.name}
          width="150"
        />
      )}

      <h3>
        <Link to={`/shows/${show.id}`}>{show.name}</Link>
      </h3>

      <p>Genres: {show.genres.join(", ")}</p>

      <p>Rating: ⭐ {show.rating.average}</p>

    </div>
  );
}

export default ShowCard;
