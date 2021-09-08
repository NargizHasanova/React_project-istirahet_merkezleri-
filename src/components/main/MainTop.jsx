import { beach } from "../../state/state"
import { Link } from "react-router-dom"
import { useState } from "react"

let sliceBeach = beach.slice(0, 3)

export default function MainTop() {

    const [showMore, setShowMore] = useState(false)
    return (
        <div className="main__top">
            <h1 className="title">Çimərliklər<hr /></h1>
            <div id="beach" className="beach__cards">
                {sliceBeach.map(item => {
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
            {!showMore &&
                <div onClick={() => {
                    setShowMore(!showMore)
                    sliceBeach = beach.slice()
                }} className="more__info">
                    <i className="fas fa-chevron-down"></i>
                    <span>Daga çox göstər</span>
                </div>}
            {showMore &&
                <div onClick={() => {
                    setShowMore(!showMore)
                    sliceBeach = beach.slice(0, 3)
                }} className="more__info">
                    <i className="fas fa-chevron-up"></i>
                    <span>Daga az göstər</span>
                </div>}

        </div>
    )
}
