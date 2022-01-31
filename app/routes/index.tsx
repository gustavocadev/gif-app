import FormComponent from "../components/FormComponent";
import Header from "../components/Header";
import { Gif } from "~/types/Gif";
import { LoaderFunction, useLoaderData, MetaFunction } from "remix";
import getGifs from "~/helpers/getGifs.server";

interface LoaderData {
    gifs: Gif[];
    title: string;
}

export const loader: LoaderFunction = async ({ request }) => {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get("title") as string;

    if (!title) {
        return {
            msg: "error",
        };
    }

    const gifs = await getGifs(title);

    return {
        gifs,
        title,
    };
};

export const meta: MetaFunction = () => {
    return {
        title: "Gif App",
        description: "Gif App where you can search any gif you want!",
    };
};

export default function Index() {
    const { gifs, title } = useLoaderData<LoaderData>();

    return (
        <>
            <Header />
            <FormComponent name="title" message="Your Gif" />
            <h2 className="w-11/12 py-4 mx-auto text-2xl capitalize">
                {title}
            </h2>
            <section className="grid grid-cols-1 gap-2 m-2  sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 sm:mx-24 sm:my-8">
                {gifs &&
                    gifs.map((gif) => (
                        <figure className="mx-auto" key={gif.id}>
                            <img src={gif.url} alt={gif.title} />
                        </figure>
                    ))}
            </section>
        </>
    );
}
