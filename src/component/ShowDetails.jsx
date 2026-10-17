

import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ShowDetails() { 
    const { id } = useParams();   

  const [show, setShow] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function APIcall() {
      try {
        let responce = await fetch(`https://api.tvmaze.com/shows/${id}`);
        if (!responce.ok) throw new Error("Show not found");
        let data = await responce.json();
        setShow(data);

        let castResponce = await fetch(`https://api.tvmaze.com/shows/${id}/cast`);
        if (!castResponce.ok) throw new Error("Failed to load cast");
        let castData = await castResponce.json();
        setCast(castData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    APIcall();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="details">
      <h1>{show.name}</h1>
      <img src={show.image.medium} />
      <p>Genres: {show.genres.join(", ")}</p>
      <p>Language: {show.language}</p>
      <p>Premiered: {show.premiered}</p>
      <p>Rating: ⭐ {show.rating.average}</p>
      <p>{show.summary.replace(/<[^>]+>/g, "")}</p>

      <h2>Cast</h2>
      <div className="grid">
      {cast.map((member) => (
        <div className="card" key={member.character.id}>
          {member.person.image && <img src={member.person.image.medium} width="100" />}
          <h3>{member.person.name}</h3>
          <p>as {member.character.name}</p>
        </div>
      ))}
      </div>
    </div>
  )
}
