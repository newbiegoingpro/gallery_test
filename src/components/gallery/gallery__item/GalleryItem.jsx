import React from 'react'

export default function GalleryItem(props) {
    const clickHandler = () => {
        props.handleModal()
        props.setCatUrl(props.url);
    }
    return (
            <img className="gallery__item" src={props.url} alt="cat" onClick={clickHandler} />
    )
}
