import Head from "next/head";
import Login from "./log-in";
import CreateUser from "./create-user";

export default function Home() {
  return (
    <>
      <Head>
        <title>CassVita</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Login />
        {/* <CreateUser /> */}
      </main>
    </>
  );
}
