import React from 'react'
import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from '../../hoooks/useFetchGifs';
jest.mock('../../hoooks/useFetchGifs');

const text = "AAA"
describe('Pruebas en el componente GifGrid', () => {
    test('Debe mostrarse el componente ', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid categorias={text} />)
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe de mostrar el componente con datos de useFetchGifs ', () => {

        const gifs = [{
            id: 1,
            name: 'Julio Agoste Jimenez',
            email: 'iblopez@gmail.com',
            phone: '5452635446',
            url: 'http://127.0.0.1:3000/logo192.png'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid categorias={text + ''} />)
        expect(wrapper).toMatchSnapshot();
    })

})
