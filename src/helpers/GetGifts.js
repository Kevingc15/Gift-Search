

export const GetGifts = async (category, limit) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=fXPjbNXrgsGLRPYMdzAf4G4BbZFHU7no&q=${category}&limit=${limit}`;
    const answ = await fetch(url);
    const {data} = await answ.json();
    const gifts = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))

    console.log(gifts)
    return gifts;
}