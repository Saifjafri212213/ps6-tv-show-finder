
import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'

export default function Show() {

  const [shows , setShows] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(()=>{
    async function getData() {
      try {
        let response = await fetch("https://api.tvmaze.com/shows?page=0")
        if (!response.ok) throw new Error("Failed to load shows")
        let data = await response.json()
        setShows(data.slice(0,40));
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    getData()
  },[])

  let result = shows.filter((show) => {
    return show.name.toLowerCase().includes(search.toLowerCase());
  });


  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Error: {error}</h2>

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
