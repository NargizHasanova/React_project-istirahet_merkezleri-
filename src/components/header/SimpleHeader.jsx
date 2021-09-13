import { Link, NavLink } from 'react-router-dom'


export default function SimpleHeader() {
    return (
        <div className="header__bottom">
            <nav>
                <ul>
                    <li><Link to="/">Ana səhifə</Link></li>
                    <li><NavLink activeclassname="active" to="/beach">Çimərliklər</NavLink></li>
                    <li><NavLink activeclassname="active" to="/aqua">Aqua parklar</NavLink></li>
                    <li><NavLink activeclassname="active" to="/sanatorium">Sanatoriyalar</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
