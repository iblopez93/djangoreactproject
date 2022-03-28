import React from 'react'
import PropTypes from 'prop-types'


export const GridGifItem = ({ url, id, name, phone }) => {

    return (
        <div className="card animated fadeIn">
            <img
                src={url}
                alt={name}
            />
            <p>{name}</p>

        </div>
    )
}

GridGifItem.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
