import { Head } from "$fresh/runtime.ts";
export default function Layout({ Component, state }: PageProps) {

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <h2 id="top">Portfolio</h2>

      <nav class="mt-4 flex gap-3">
        <a href="/portfolio/ux-design-mediq">
          UX Design
        </a>
        <a href="/portfolio/graphic-design">
          Graphic Design
        </a>
      </nav>
      <div class="layout">
        <Component />
      </div>
      <a href="#top">top of page</a>
    </>
  );
}
