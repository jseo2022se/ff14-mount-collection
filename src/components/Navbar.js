import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/mycollection">My Collection</Link>
                </li>
            </ul>
        </div>
    )
}