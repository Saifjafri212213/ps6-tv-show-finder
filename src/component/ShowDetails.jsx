

import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ShowDetails() { 
    const { id } = useParams();   

  const [show, setShow] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function APIcall() {
      let responce = await fetch(`https://api.tvmaze.com/shows/${id}`);
      let data = await responce.json();
      setShow(data);

      let castResponce = await fetch(`https://api.tvmaze.com/shows/${id}/cast`);
      let castData = await castResponce.json();
      setCast(castData);
    }

    APIcall();
  }, [id]);

   if (!show) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>{show.name}</h1>
      <img src={show.image.medium} />
      <p>Genres: {show.genres.join(", ")}</p>
      <p>Language: {show.language}</p>
      <p>Premiered: {show.premiered}</p>
      <p>Rating: ⭐ {show.rating.average}</p>
      <p>{show.summary.replace(/<[^>]+>/g, "")}</p>

      <h2>Cast</h2>
      {cast.map((member) => (
        <div key={member.character.id}>
          {member.person.image && <img src={member.person.image.medium} width="100" />}
          <h3>{member.person.name}</h3>
          <p>as {member.character.name}</p>
        </div>
      ))}
    </div>
  )
}
