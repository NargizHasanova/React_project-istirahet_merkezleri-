import React from 'react'
import { Link } from 'react-router-dom'

export default function SimpleHeader() {
    return (
        <div className="header__bottom">
            <nav>
                <ul>
                    <li><Link to="/">Ana səhifə</Link></li>
                    <li><Link to="/beach">Çimərliklər</Link></li>
                    <li><Link to="/aqua">Aqua parklar</Link></li>
                    <li><Link to="/sanatorium">Sanatoriyalar</Link></li>
                </ul>
            </nav>
        </div>
    )
}
