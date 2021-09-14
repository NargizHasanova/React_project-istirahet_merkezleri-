import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AquaContext } from '../../Context'
import { aquaPark } from '../../state/state'
import '../main/_main.scss'
import { useMediaQuery } from 'react-responsive'

export default function AquaPark() {
    const { aquaData, setAquaData } = useContext(AquaContext)
    const isTablet768 = useMediaQuery({ query: '(max-width: 768px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })

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
                <p className="title__intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa obcaecati rem tempora velit, perspiciatis saepe ipsum ad asperiores eaque impedit assumenda in ratione quas. Quae distinctio in magnam praesentium.</p>
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
                                    {isBigScreen && <button><Link to={`/aqua_item/${item.id}`}>Ətraflı</Link></button>}
                                    {isTablet768 && <button><Link to={`/aqua_mobile_item/${item.id}`}>Ətraflı</Link></button>}
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
