import React from 'react'
import { useFetchGifs } from '../hoooks/useFetchGifs';
import { GridGifItem } from './GridGifItem';
import PropTypes from 'prop-types';



export const GifGrid = ({ categorias }) => {
    const { data: imgs, loading } = useFetchGifs(categorias);


    return (
        <>
            <h3>{categorias}</h3>
            <div className="card-grid animated fadeIn">
                {loading && <p className="animated flash">'Cargando datos ...'</p>}


                {imgs.map((img) => (
                    <GridGifItem
                        key={img.id}
                        {...img}
                    />
                ))}

            </div>
        </>
    )
}

GifGrid.propTypes = {
    categorias: PropTypes.string.isRequired
}