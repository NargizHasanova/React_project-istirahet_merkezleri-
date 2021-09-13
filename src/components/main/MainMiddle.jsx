import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react/cjs/react.development"
import { AquaContext } from "../../Context"
import { aquaPark } from "../../state/state"

let sliceAquaData = aquaPark.slice(0, 3)

export default function MainTop() {
    const { aquaData, setAquaData } = useContext(AquaContext)
    const [showMore, setShowMore] = useState(false)


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
        <div className="main__top">
            <h1 className="title"><Link to="/aqua">Aqua Parklar</Link><hr /></h1>
            <div className="beach__cards">
                {sliceAquaData.map(item => {
                    return (
                        <div key={item.id} className="beach__cards--item">
                            <figure>
                                <img src={item.img1} alt={item.title} />
                                <i onClick={() => likeOnClick(item.id)} className={`fas fa-heart like ${item.likeStatus ? "red" : ""}`}></i>
                            </figure>
                            <h3>{item.title}</h3>
                            <div className="rate">
                                <button><Link to={`/aqua_item/${item.id}`}>Ətraflı</Link></button>
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
            {!showMore &&
                <div onClick={() => {
                    setShowMore(!showMore)
                    sliceAquaData = aquaData.slice(0, 15)
                }} className="more__info">
                    <i className="fas fa-chevron-down"></i>
                    <span>Daga çox göstər</span>
                </div>}
            {showMore &&
                <div onClick={() => {
                    setShowMore(!showMore)
                    sliceAquaData = aquaData.slice(0, 3)
                }} className="more__info">
                    <i className="fas fa-chevron-up"></i>
                    <span>Daga az göstər</span>
                </div>}
        </div>
    )
}
