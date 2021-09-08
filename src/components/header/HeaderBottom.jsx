import { Link } from "react-router-dom";
import video from './img&video/header.mp4'
import reserveCover from './img&video/headerImg1.jpg'

export default function HeaderBottom() {
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
