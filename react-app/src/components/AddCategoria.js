// @flow
import React, { useState } from "react";
import PropTypes from 'prop-types';



export const AddCategoria = ({ setCategorias }) => {
    const [initialValue, setInitialValue] = useState('');
    const handleChange = (e) => {
        setInitialValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (initialValue.trim().length > 2) {
            setCategorias(categ => [initialValue, ...categ,]);
            setInitialValue('');
        }

    };
    return (
        <form onSubmit={handleSubmit}>
            <p>{initialValue}</p>
            <input
                type="text"
                value={initialValue}
                onChange={handleChange}
            />
        </form>
    );
};

AddCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
}