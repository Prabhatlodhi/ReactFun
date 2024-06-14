 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{border:"1px solid red",}} >
        <ul style={{ display:"flex", listStyle:"none"}} >
          <li  >
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/randomPage">Some Random Page</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar