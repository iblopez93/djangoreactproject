import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import { AddCategoria } from "../../components/AddCategoria"

describe('Pruebas en AddCategoria', () => {
    const setCategorias = jest.fn();
    let wrapper;
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategoria setCategorias={setCategorias} />);
    })
    test('Debe mostrarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot();

    })
    test('Debe cambiar la caja de texto ', () => {
        const input = wrapper.find('input');
        const value = "AAA"
        input.simulate('change', {
            target: { value: value }
        })
        expect(wrapper.find('p').text().trim()).toBe(value)

    })
    test('No debe ejecutarse handle submit ', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategorias).not.toHaveBeenCalled();
    })
    test('Debe de llamar la funcion setCategorias y limpar la caja de texto ', () => {
        const inputValue = "AAB";
        wrapper.find('input').simulate('change', { target: { value: inputValue } })
        wrapper.find('form').simulate('submit', { preventDefault() { } })
        expect(setCategorias).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('')
    })



})
