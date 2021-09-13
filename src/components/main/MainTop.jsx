import { beach } from "../../state/state"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { BeachContext } from "../../Context"

let sliceBeachData = beach.slice(0, 3)

export default function MainTop() {
    const { beachData, setBeachData } = useContext(BeachContext)
    const [showMore, setShowMore] = useState(false)


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
        <div className="main__top">
            <h1 className="title"><Link to="/beach">Çimərliklər</Link><hr /></h1>
            <div id="beach" className="beach__cards">
                {sliceBeachData.map(item => {
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
            {!showMore &&
                <div onClick={() => {
                    setShowMore(!showMore)
                    sliceBeachData = beachData.slice(0, 15)
                }} className="more__info">
                    <i className="fas fa-chevron-down"></i>
                    <span>Daga çox göstər</span>
                </div>}
            {showMore &&
                <div onClick={() => {
                    setShowMore(!showMore)
                    sliceBeachData = beachData.slice(0, 3)
                }} className="more__info">
                    <i className="fas fa-chevron-up"></i>
                    <span>Daga az göstər</span>
                </div>}

        </div>
    )
}
