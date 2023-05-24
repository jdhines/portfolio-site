import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

export default function App({ Component }: AppProps) {
  return (
    <html data-custom="data">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.simplecss.org/simple.min.css"
        />
        <link rel="stylesheet" href={asset("global.css")} />
      </Head>
      <body class="bodyClass">
        <div class="p-4 mx-auto max-w-screen-md">
          <header class="mb-8">
            <a href="/">
              <img
                src="/logo.svg"
                class="block mx-auto mb-4 w-32 h-32"
                alt="the fresh logo: a sliced lemon dripping with juice"
              />
            </a>
          </header>
          <Component />
        </div>
      </body>
    </html>
  );
}
