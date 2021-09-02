import Head from "next/head";
import { useSession } from "next-auth/client";
import Jumbotron from "../components/Hero";
import CreatorsList from "../components/CreatorsProfile";
import TuberOne from "../components/TubeOne";
import Dashboard from "./dashboard/";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>TuberDome</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="TuberDome description here" />
      </Head>
      <div>
        {!session && (
          <>
            <main>
              <Jumbotron />
              <CreatorsList />
              <TuberOne />
            </main>
          </>
        )}
        {session && (
          <>
            <Dashboard />
          </>
        )}
      </div>
    </>
  );
}
