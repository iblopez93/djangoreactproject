import { getGifs } from '../../helpers/getGifs';


describe('Pruebas en el getGifs', () => {
    test('debe traer 10 de elementos ', async () => {
        const gifs = await getGifs('');
        console.log(gifs);
        expect(gifs.length).toBe(5);
    })

})
