import { Head } from "$fresh/runtime.ts";
import Portfolio from "../islands/Portfolio.tsx";
export default function PortfolioPage() {


  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Portfolio></Portfolio>
    </>
  );
}
