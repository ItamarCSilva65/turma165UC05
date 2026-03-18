import { Link } from "react-router-dom";
export default function Header(){
    return(
        <>
            <header className="header">
                <div className="header-content">
                <h1> icon Filmes</h1>
                <nav>
                    <ul className="menu">
                        <li>
                            <Link to="/">Início</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                    </ul>
                </nav>
                </div>
            </header>
            </>
    )
}