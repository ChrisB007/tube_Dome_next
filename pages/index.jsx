import Head from "next/head";
import { useSession } from "next-auth/client";
import Jumbotron from "../components/Hero";
import CreatorsList from "../components/CreatorsProfile";
import TuberOne from "../components/TubeOne";
import Dashboard from "./dashboard/";

export default function Home({ finalData }) {
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
            <main className="bg-gradient-to-r from-gray-500 via-gray-200 to-gray-800 ">
              <Jumbotron />
              <div className="pt-5 flex justify-center items-center">
                <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                  <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Connect with genius Creators
                  </h2>
                  <p className="text-xl text-gray-500 flex justify-center items-center">
                    By Name | By Category | By Content
                  </p>
                </div>
              </div>
              {finalData.map((data) => (
                <div className=" pt-5 inline-flex">
                  <CreatorsList
                    name={data.name}
                    image={data.image}
                    description={data.description}
                    categories={data.categories}
                    total_views={data.total_views}
                    rate={data.rate}
                  />
                </div>
              ))}
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

export async function getStaticProps(context) {
  //Base Url

  const baseUrl = "http://localhost:3000";

  const initialData = await fetch(`${baseUrl}/api/channels`);
  const finalData = await initialData.json();

  //Return data
  return {
    props: {
      finalData,
    },
  };
}
