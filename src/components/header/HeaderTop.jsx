import { Link } from "react-router-dom";


export default function HeaderTop() {
    return (
        <div className="header__top">
            <div className="header__top--logo">
                <h3>Logo</h3>
            </div>
            <form>
                <input type="text" placeholder="axtar" />
                <button>Axtar</button>
            </form>
            <div className="header__top--add">
                <button className="plus-btn"><i className="fas fa-plus-circle"></i></button>
                <span><Link to="/addBlog">Elan yerləşdir</Link></span>
            </div>
        </div>
    )
}
