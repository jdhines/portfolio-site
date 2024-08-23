import { Head } from "$fresh/runtime.ts";
export default function Layout({ Component, state }: PageProps) {

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <h2 id="top">Portfolio</h2>

      <nav class="my-4 flex gap-3">
        <a href="/portfolio/ux-design-mediq">
          Mediq Web App
        </a>
        <a href="/portfolio/ux-design-piedmont">
          Piedmont Health Site
        </a>
        <a href="/portfolio/tradeshow">
          Career Tradeshow
        </a>
        <a href="/portfolio/ux-design-star">
          STAR Web App
        </a>
        <a href="/portfolio/graphic-design">
          Graphic Design
        </a>
      </nav>
      <div class="layout mt-8">
        <section class="p-0">
          <Component />
        </section>
      </div>
      <a href="#top">top of page</a>
    </>
  );
}
