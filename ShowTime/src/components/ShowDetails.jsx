import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ShowDetails() {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setShow(data);
      });

    fetch(`https://api.tvmaze.com/shows/${id}/cast`)
      .then((res) => res.json())
      .then((data) => {
        setCast(data);
      });
  }, [id]);

  if (!show) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>{show.name}</h1>

      {show.image && (
        <img
          src={show.image.medium}
          alt={show.name}
        />
      )}

      <p>Genres: {show.genres.join(", ")}</p>

      <p>Language: {show.language}</p>

      <p>Premiered: {show.premiered}</p>

      <p>Rating: ⭐ {show.rating.average}</p>

      <p>{show.summary && show.summary.replace(/<[^>]+>/g, "")}</p>

      <h2>Cast</h2>

      {cast.map((member) => (
        <div key={member.character.id}>
          {member.person.image && (
            <img
              src={member.person.image.medium}
              alt={member.person.name}
              width="100"
            />
          )}
          <h3>{member.person.name}</h3>
          <p>as {member.character.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ShowDetails;
