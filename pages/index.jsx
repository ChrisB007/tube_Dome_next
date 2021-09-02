import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { useSession } from "next-auth/client";
import Jumbotron from "../components/Hero";
import CreatorsList from "../components/CreatorsProfile";
import TuberOne from "../components/TubeOne";

export default function Home({ isConnected }) {
  const [session, loading] = useSession();
  const user = session?.user;

  return (
    <>
      <Head>
        <title>TuberDome</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="TuberDome description here" />
      </Head>
      <main>
        <Jumbotron />
        <CreatorsList />
        <TuberOne />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;

  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}
