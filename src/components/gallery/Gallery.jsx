import React from 'react'
import GalleryItem from './gallery__item/GalleryItem';
export default function Gallery(props) {
    return (
        <div className='gallery__grid'>
            {
                props.cats.map((el) => {
                    return(
                        <GalleryItem key={el.id} url={el.url} setCatUrl={props.setCatUrl} handleModal={props.handleModal}></GalleryItem>
                    )
                })
            }
        </div>
    )
}
