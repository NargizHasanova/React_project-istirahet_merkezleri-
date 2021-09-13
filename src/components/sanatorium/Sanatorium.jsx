import { sanatorium } from '../../state/state'
import { Link } from 'react-router-dom'
import '../main/_main.scss'
import { useContext } from 'react'
import { SanatoriumContext } from '../../Context'

export default function Sanatorium() {
    const { sanatoriumData, setSanatoriumData } = useContext(SanatoriumContext)

    function likeOnClick(id) {
        setSanatoriumData(
            sanatoriumData.map(item => {
                if (item.id === id) {
                    item.likeStatus = !item.likeStatus
                }
                return item
            })
        )
    }

    return (
        <main>
            <div className="main__top">
                <h1 className="title">Sanatoriyalar<hr /></h1>
                <div className="beach__cards">
                    {sanatorium.map(item => {
                        return (
                            <div key={item.id} className="beach__cards--item">
                                <figure>
                                    <img src={item.img1} alt={item.title} />
                                    <i onClick={() => likeOnClick(item.id)} className={`fas fa-heart like ${item.likeStatus ? "red" : ""}`}></i>
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
