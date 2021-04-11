import Head from "next/head";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>UNICORNS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <h1>🦄 UNICORNS 🦄</h1>
      </main>
    </div>
  );
}
