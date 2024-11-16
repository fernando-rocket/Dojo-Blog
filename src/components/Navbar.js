import { Link } from "react-router-dom"
import '../styles/Navbar.css'

const Navbar = () => {
    return(
        <>
            <div className="container">
                <nav className="menu">
                    <h1>The Dojo Blog</h1>
                    <ul>
                        <li>
                            <Link to={'/'} className="links">Home</Link>
                        </li>
                        <li>
                            <Link to={'/create'} className="links">New Blog</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;