import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

const defaultEndpoint = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=unicorn&image_type=illustration&safesearch=true&per_page=200`;

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const defaultImage =
    "https://pixabay.com/get/g70ca273bbad689ba8a4c6afc71b964928b0532d00e8f57c32a67e64ae97fdebff9ede7f290c363b797aa96b64e9ec1da99bdf6921c74c2cf5f5a84d0d24dccd4_640.png";
  const { hits = [] } = data;
  const [image, setImage] = useState(defaultImage);
  const handleOnClick = () =>
    setImage(hits[Math.floor(Math.random() * hits.length)].webformatURL);

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 font-sans">
      <Head>
        <title>UNICORNS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className="p-8 text-center text-xl font-semibold">
          🦄 UNICORNS 🦄
        </h1>
      </header>
      <main className="p-4 flex-grow">
        <div className="z-10">
          <Image
            className=""
            src={image}
            alt=""
            unoptimized={true}
            width={300}
            height={300}
          />
        </div>
      </main>
      <footer className="py-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleOnClick}
        >
          mehr
        </button>
      </footer>
    </div>
  );
}
