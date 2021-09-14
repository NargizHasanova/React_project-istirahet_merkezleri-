import { sanatorium } from '../../state/state'
import { Link } from 'react-router-dom'
import '../main/_main.scss'
import { useContext } from 'react'
import { SanatoriumContext } from '../../Context'
import { useMediaQuery } from 'react-responsive'

export default function Sanatorium() {
    const { sanatoriumData, setSanatoriumData } = useContext(SanatoriumContext)
    const isTablet768 = useMediaQuery({ query: '(max-width: 768px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })

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
                <p className="title__intro">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quibusdam quo tenetur doloremque temporibus quasi molestiae quisquam delectus. Quisquam incidunt illum soluta explicabo in cupiditate at repellat eius maxime eos!</p>
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
                                    {isBigScreen && <button><Link to={`/sanatorium_item/${item.id}`}>Ətraflı</Link></button>}
                                    {isTablet768 && <button><Link to={`/sanatorium_mobile_item/${item.id}`}>Ətraflı</Link></button>}
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
