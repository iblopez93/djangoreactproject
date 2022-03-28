import React from 'react';
import { shallow } from 'enzyme';
import { GridGifItem } from '../../components/GridGifItem';

describe('Pruebas en el componente <GridGifItem>', () => {
    const name = "Un titulo";
    const url = "http://127.0.0.1:3000/logo192.png";

    const wrapper = shallow(<GridGifItem name={name} url={url} />)

    test('Debe de mostrar el componente ', () => {

        expect(wrapper).toMatchSnapshot();
    })
    test('Debe tener un parrafo con el titulo ', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(name);
    })
    test('Debe tener una imagen con las propiedades de url y alt de las props ', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(name)

    })
    test('Debe tener la clase fadeIn en el <div> ', () => {
        const div = wrapper.find('div');
        const classname = div.prop('className');
        expect(classname.includes('fadeIn')).toBe(true);
    })



})
