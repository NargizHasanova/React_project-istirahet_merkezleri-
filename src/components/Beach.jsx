import { beach } from '../state/state'
import { Link } from 'react-router-dom'
import './main/_main.scss'

export default function Beach() {
    return (
        <main>
            <div className="main__top">
                <h1 className="title">Çimərliklər<hr /></h1>
                <div id="beach" className="beach__cards">
                    {beach.map(item => {
                        return (
                            <div key={item.id} className="beach__cards--item">
                                <figure>
                                    <img src={item.img} alt={item.title} />
                                    <i className="fas fa-heart like"></i>
                                </figure>
                                <h3>{item.title}</h3>
                                <div className="rate">
                                    <button><Link to="/">Ətraflı</Link></button>
                                    <div className="stars">
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
