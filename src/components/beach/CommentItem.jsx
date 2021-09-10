import { useContext, useState } from 'react'
import { CommentContext } from '../../Context'
import './_item.scss'
import user from '../../state/images/user.svg'


export default function CommentItem({ item }) {

    const { comment, setComment } = useContext(CommentContext)
    const [pen, setPen] = useState(false)
    const [dots, setDots] = useState(true)
    const [input, setInput] = useState(true)
    const [btnVisibility, setBtnVisibility] = useState(false)
    const [changeValue, setChangeValue] = useState(item.comment)
    const [updatedId, setUpdatedId] = useState(null)


    function dotChange() {
        setPen(!pen)
    }

    function updateComment(id) {
        setInput(!input)
        setPen(!pen)
        setDots(!dots)
        setBtnVisibility(!btnVisibility)
        comment.map(item => {
            if (item.id === id) {
                setChangeValue(item.comment)
            }
        })
        setUpdatedId(id)
    }
    function saveChanges() {
        setComment(comment.map(item => {
            if (item.id === updatedId) {
                item.comment = changeValue
            }
            return item
        }))

        setBtnVisibility(!btnVisibility)
        setDots(!dots)
    }
    function deleteComment(id) {
        setComment(
            comment.filter(item => {
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
                    <img src={user} alt="profile" />
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
                {btnVisibility &&
                    <div className="edit-btns">
                        <button onClick={saveChanges} className="btn">yenilə</button>
                        <button onClick={cancel} className="btn">ləğv et</button>
                    </div>}
                {dots && <i onClick={() => dotChange(item.id)} className="fas fa-ellipsis-h dots"></i>}
                {pen && <div className="edit">
                    <i onClick={() => updateComment(item.id)} className="fas fa-pen pen"></i>
                    <i onClick={() => deleteComment(item.id)} className="fas fa-trash"></i>
                </div>}


            </div>

        </div>
    )

}
