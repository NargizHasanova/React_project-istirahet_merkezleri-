import { sanatorium } from '../../state/state'
import { Link } from 'react-router-dom'
import '../main/_main.scss'

export default function Sanatorium() {
    return (
        <main>
            <div className="main__top">
                <h1 className="title">Sanatoriyalar<hr /></h1>
                <div className="beach__cards">
                    {sanatorium.map(item => {
                        return (
                            <div key={item.id} className="beach__cards--item">
                                <figure>
                                    <img src={item.img} alt={item.title} />
                                    <i className="fas fa-heart like"></i>
                                </figure>
                                <h3>{item.title}</h3>
                                <div className="rate">
                                    <button><Link to={`/sanatorium_item/${item.id}`}>Ətraflı</Link></button>
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
