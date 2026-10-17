
import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'

export default function Show() {

  const [shows , setShows] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    async function getData() {
      let response = await fetch("https://api.tvmaze.com/shows?page=0")
      let data = await response.json()
      setShows(data.slice(0,40));
      
    }
    getData()
  },[])

  let result = shows.filter((show) => {
    return show.name.toLowerCase().includes(search.toLowerCase());
  });


  return (
     <div>
      <h1>TV Shows</h1>

      <input
        type="text"
        placeholder="Search show..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {result.map((show) => (
        <div className="card" key={show.id}>
          <img src={show.image.medium} width="150" />
          <h3>
            <Link to={`/shows/${show.id}`}>{show.name}</Link>
          </h3>
          <p>{show.genres.join(", ")}</p>
          <p>⭐ {show.rating.average}</p>
        </div>
      ))}
      </div>
      </div>
  )
}
