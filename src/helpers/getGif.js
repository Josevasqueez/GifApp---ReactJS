
export const getGifs = async ( category ) => {

    const apiKey = 'r1CQOEj4oKyEx0DqqadLrelcXxVm9ZWu';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=2&api_key=${apiKey}`
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    
    return(gifs);
}