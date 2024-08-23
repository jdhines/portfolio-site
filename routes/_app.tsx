import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";
import { Nav } from "../components/Nav.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html data-custom="data">
      <Head>
        <link type = "text/css" rel = "stylesheet" href = "https://cdn.jsdelivr.net/gh/HazelBall/Fresh/fresh.min.css"/>
        <link
          rel="stylesheet"
          href="https://cdn.simplecss.org/simple.min.css"
        />
        <link rel="stylesheet" href={asset("/global.css")} />
      </Head>
      <body class="bodyClass">
        <Nav/>
        <div class="wrapper">
          <Component />
        </div>
        <footer class="p-4">
          <p class="white">Copyright &copy; 2024</p>
        </footer>
      </body>
    </html>
  );
}
