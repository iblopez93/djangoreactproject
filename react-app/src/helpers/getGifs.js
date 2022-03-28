export const getGifs = async (categorias) => {
    const url = `http://127.0.0.1:8000/api/customers/?name=${encodeURI(categorias)}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.pk,
            name: img.first_name + ' ' + img.last_name,
            email: img.email,
            phone: img.phone,
            url: 'http://127.0.0.1:3000/logo192.png'
        }

    })
    return gifs;
}