import { useContext, useState } from 'react'
import '../beach/_item.scss'
import user from '../../state/images/user.svg'
import { SanCommentContext } from '../../Context'


export default function SanCommentItem({ item }) {
    const [pen, setPen] = useState(false)
    const [dots, setDots] = useState(true)
    const [input, setInput] = useState(true)
    const [btnVisibility, setBtnVisibility] = useState(false)
    const [changeValue, setChangeValue] = useState(item.comment)
    const [updatedId, setUpdatedId] = useState(null)
    const { sanComment, setSanComment } = useContext(SanCommentContext)


    function dotChange() {
        setPen(!pen)
    }

    function updateComment(id) {
        setInput(!input)
        setPen(!pen)
        setDots(!dots)
        setBtnVisibility(!btnVisibility)
        sanComment.map(item => {
            if (item.id === id) {
                setChangeValue(item.comment)
            }
            return item
        })
        setUpdatedId(id)
    }
    function saveChanges() {
        setSanComment(sanComment.map(item => {
            if (item.id === updatedId) {
                item.comment = changeValue
            }
            return item
        }))

        setBtnVisibility(!btnVisibility)
        setDots(!dots)
    }

    function deleteComment(id) {
        setSanComment(
            sanComment.filter(item => {
                return item.id !== id
            })
        )
    }

    function cancel() {
        setDots(!dots)
        setBtnVisibility(!btnVisibility)
    }
    return (
        <div className="comment__item">
            <div className="comment">
                <figure>
                    <img className="comment__item--user" src={user} alt="profile" />
                </figure>
                {input && <input
                    readOnly
                    type="text"
                    value={changeValue}
                    onChange={(e) => setChangeValue(e.target.value)}
                />}
                {!input && <input
                    type="text"
                    value={changeValue}
                    onChange={(e) => {
                        setChangeValue(e.target.value)
                    }}
                />}
                {btnVisibility && item.allowEdit &&
                    <div className="edit-btns">
                        <button onClick={saveChanges} className="btn">yenilə</button>
                        <button onClick={cancel} className="btn">ləğv et</button>
                    </div>}
                {dots && item.allowEdit && <i onClick={() => dotChange(item.id)} className="fas fa-ellipsis-h dots"></i>}
                {pen && item.allowEdit && <div className="edit">
                    <i onClick={() => updateComment(item.id)} className="fas fa-pen pen"></i>
                    <i onClick={() => deleteComment(item.id)} className="fas fa-trash"></i>
                </div>}
            </div>
        </div>
    )
}