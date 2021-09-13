import { Link, NavLink } from "react-router-dom";
import video from './img&video/header.mp4'
import reserveCover from './img&video/headerImg1.jpg'

export default function HeaderBottom() {
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
            <div className="slider">
                <video src={video} muted loop autoPlay></video>
                <img className='reserveCover' src={reserveCover} alt="nature" />
            </div>
            <div className="title">
                <h1 >Istirahət edəcəyin yeri</h1>
                <h1>Bizimlə seç!</h1>
            </div>
        </div>
    )
}
