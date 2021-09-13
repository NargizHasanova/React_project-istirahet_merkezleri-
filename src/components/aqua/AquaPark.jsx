import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AquaContext } from '../../Context'
import { aquaPark } from '../../state/state'
import '../main/_main.scss'

export default function AquaPark() {
    const { aquaData, setAquaData } = useContext(AquaContext)

    function likeOnClick(id) {
        setAquaData(
            aquaData.map(item => {
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
                <h1 className="title">Aqua Parklar<hr /></h1>
                <div className="beach__cards">
                    {aquaPark.map(item => {
                        return (
                            <div key={item.id} className="beach__cards--item">
                                <figure>
                                    <img src={item.img1} alt={item.title} />
                                    <i onClick={() => likeOnClick(item.id)} className={`fas fa-heart like ${item.likeStatus ? "red" : ""}`}></i>
                                </figure>
                                <h3>{item.title}</h3>
                                <div className="rate">
                                    <button><NavLink activeclassname="active" to={`/aqua_item/${item.id}`}>Ətraflı</NavLink></button>
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
