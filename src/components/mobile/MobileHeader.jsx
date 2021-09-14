import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../header/_header.scss'
import { useMediaQuery } from 'react-responsive'

export default function MobileHeader() {
    const [mobile, setMobile] = useState(false)
    const isTablet768 = useMediaQuery({ query: '(max-width: 768px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })

    function showMenu() {
        setMobile(!mobile)
    }
    function closeMenu() {
        setMobile(!mobile)
    }
    return (
        <div className="mobile__header">
            <div className="header__top">
                <div className="header__top--logo">
                    <h3><Link to="/">Logo</Link></h3>
                </div>
                <form>
                    <input type="text" placeholder="axtar..." />
                    <button>Axtar</button>
                </form>
                <div className="header__top--add">
                    <button className="plus-btn"><i className="fas fa-plus-circle"></i></button>
                    {isBigScreen && <span><Link to="/addBlog">Elan yerləşdir</Link></span>}
                    {isTablet768 && <span><Link to="/addBlog_mobile">Elan yerləşdir</Link></span>}
                </div>
                <div className="burger__wrapper">
                    <i onClick={showMenu} className="fas fa-bars menu-bar-icon"></i>
                    <ul className={mobile ? "showMenu" : ""}>
                        <i onClick={closeMenu} className="fas fa-times close-menu"></i>
                        <li><Link to="/">Ana səhifə</Link></li>
                        <li><Link to="/beach_mobile">Çimərliklər</Link></li>
                        <li><Link to="/aqua_mobile">Aqua parklar</Link></li>
                        <li><Link to="/sanatorium_mobile">Sanatoriyalar</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
