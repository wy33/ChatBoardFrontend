import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Chat Board</Link>
            <ul>
                {/* Links/routes go here if there are any */}
            </ul>
        </nav>
    )
}