import Head from "next/head";
import Body from "../components/BodyOne";
import BodyTwo from "../components/BodyTwo";
import Gamify from "../components/Gamify";
import Hero from "../components/Hero";
import { useSession } from "next-auth/client";
import Dashboard from "./dashboard/index";

export default function Home() {
  const [session, loading] = useSession();
  return (
    <>
    <Head>
        <title>flicBase</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="flicBase desciption here" />
      </Head>
      {!session && (
        <>
          <div>
            <Hero />
            <Body />
            <Gamify />
            <BodyTwo />
          </div>
        </>
      )}
      {session && (
        <>
          <Dashboard />
        </>
      )}
    </>
  );
}
