
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>ShowTime</h1>
        <p>Find your movie</p>

        <Link to='/shows'>
        <button type="button">Browse Shows</button>
        </Link>

    </div>
  )
}
