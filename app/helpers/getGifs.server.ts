import { Gif } from '~/types/Gif'

const getGifs = async (title: string) => {
    const KEY_API = "INBYS428FGU4";
    const url = `https://g.tenor.com/v1/search?key=${KEY_API}&limit=9&q=${encodeURI(
        title
    )}`;

    const res = await fetch(url);
    const { results }: { results: any[] } = await res.json();

    const gifs: Gif[] = results.map((result) => {
        return {
            title: result.title,
            id: result.id,
            url: result.media[0].gif.url,
        };
    });

    return gifs
}

export default getGifs