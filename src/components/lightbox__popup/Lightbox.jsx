import React from 'react'
import { BiHeart, BiMessageRounded, BiX } from 'react-icons/bi'
export default function Lightbox(props) {
    const [comment, setComment] = React.useState('');
    const [comments, setComments] = React.useState([]);
    const [isLiked, setIsLiked] = React.useState(false);
    const form = React.useRef(null);
    const likeHandler = () => {
        setIsLiked(!isLiked)
    };
    const changeHandler = (e) => {
        setComment(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        const toSpread = [comment];
        setComments([...toSpread, ...comments]);
        console.log(comments);
        setComment('');
    };
    const closeHandler = () => {
        props.handleModal(props.isOpen);
        setComment(''); // не работает так, не понял почему. поэтому получаю доступ
        form.current.reset(); // через ref.current
        setComments([]);
    }
    return (
        <>
            <div className={`${props.isOpen ? "overlay" : "overlay_hidden"}`}>
                <div className="modal">

                    <div className="modal__container">
                        <button className="modal__close-btn" onClick={closeHandler}>
                            <BiX size="2.9em" color="white" />
                        </button>

                        <img className="modal__cat" src={props.catImg} alt="cat" />
                        <button className="modal__like-btn" onClick={likeHandler} >
                            <BiHeart size="1.7em" color={isLiked ? "red" : "white"} />
                        </button>

                        <div className="modal__bottom-container">
                            <form className="modal__form" ref={form} onSubmit={submitHandler}>
                                <input placeholder="leave a comment" className="modal__input" required onChange={changeHandler}>

                                </input>
                                <button className="modal__submit-btn">
                                    <BiMessageRounded size="1em" />
                                </button>
                            </form>
                            {comments.length !== 0 && <section className="modal__comment-section">
                                {
                                    comments.map((el) => {
                                        return (
                                            <p className="modal__comment">{el}</p>
                                        )
                                    })
                                }
                            </section>
                            }
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}
