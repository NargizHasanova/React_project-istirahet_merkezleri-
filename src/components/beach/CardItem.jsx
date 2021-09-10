import { useHistory, useParams } from "react-router"
import { beach } from "../../state/state"
import './_cardItem.scss'
import user from '../../state/images/user.svg'
import CommentItem from "./CommentItem"
import { useContext, useState } from "react"
import { CommentContext } from "../../Context"

export default function CardItem() {
    const { id } = useParams()
    const filtered = beach.filter(item => item.id === parseInt(id))
    const history = useHistory()
    const { comment, setComment } = useContext(CommentContext)
    const [addValue, setAddValue] = useState("")

    function addInput() {
        setComment([{ id: Date.now(), comment: addValue }, ...comment])
        setAddValue("")
    }
    return (
        <>
            <div onClick={() => history.goBack()} className="pageBack">
                <i className="fas fa-chevron-left"></i>
                <span>geri</span>
            </div>
            {filtered.map(item => (
                <div key={item.id} className="card__item__container">
                    <figure className="photo-gallery">
                        <img src={item.img} alt="" />
                    </figure>
                    <div className="card__desc">
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <div>
                            <div className="card__contact">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>{item.map}</span>
                            </div>
                            <div className="card__contact">
                                <i className="fas fa-phone-alt"></i>
                                <span>{item.num}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="comments__section">
                <h2>Şərhlər({comment.length})</h2>
                <div className="add__form">
                    <div className="comment">
                        <figure>
                            <img src={user} alt="profile" />
                        </figure>
                        <input
                            type="text"
                            placeholder="şərh yaz..."
                            value={addValue}
                            onChange={(e) => setAddValue(e.target.value)}
                        />
                    </div>
                    <div className="button">
                        <button onClick={addInput} className="share">paylaş</button>
                    </div>
                </div>
            </div>
            {comment.map(item => {
                return <CommentItem key={item.id} item={item} />
            })}
        </>
    )
}
