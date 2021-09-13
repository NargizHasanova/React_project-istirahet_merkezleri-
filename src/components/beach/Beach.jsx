import { beach } from '../../state/state'
import { Link } from 'react-router-dom'
import '../main/_main.scss'
import { useContext } from 'react'
import { BeachContext } from '../../Context'


export default function Beach() {
    const { beachData, setBeachData } = useContext(BeachContext)

    function likeOnClick(id) {
        setBeachData(
            beachData.map(item => {
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
                <h1 className="title">Çimərliklər<hr /></h1>
                <div id="beach" className="beach__cards">
                    {beach.map(item => {
                        return (
                            <div key={item.id} className="beach__cards--item">
                                <figure>
                                    <img src={item.img1} alt={item.title} />
                                    <i onClick={() => likeOnClick(item.id)} className={`fas fa-heart like ${item.likeStatus ? "red" : ""}`}></i>
                                </figure>
                                <h3>{item.title}</h3>
                                <div className="rate">
                                    <button><Link to={`/beach_item/${item.id}`}>Ətraflı</Link></button>
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
