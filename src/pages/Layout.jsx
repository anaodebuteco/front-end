import { Outlet, Link } from "react-router-dom";
import copaImagem from '../assets/copadobrasil.jpeg';
const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <Outlet />
            </nav>
            <img src={copaImagem} alt="Copa do Brasil 2024" className="image" />
        </div>
    );
};

export default Layout;