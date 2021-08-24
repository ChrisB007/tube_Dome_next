import Head from "next/head";
import Body from "../components/BodyOne";
import BodyTwo from "../components/BodyTwo";
import Gamify from "../components/Gamify";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Body />
      <Gamify />
      <BodyTwo />
    </div>
  );
}
