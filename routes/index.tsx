import { Head } from "$fresh/runtime.ts";
import { Button } from "../components/Button.tsx";
import { About } from "../components/About.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jess Hines - Home</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="font-mono text-lg uppercase my-4">Jess Hines</h1>
        <div class="bio flex flex-col">
          <p>
            Tucson, AZ |{" "}
            <a
              href="https://www.linkedin.com/in/jesshines"
              rel="nofollow"
              target="_blank"
            >
              linkedin.com/in/jesshines
            </a>
          </p>
        </div>
        <p>
          Hi! I'm a passionate web designer with a strong focus on user
          experience. As a Principal Software Engineer with 15 years of
          experience in UX/UI design, web development, and agile leadership, I
          have a proven track record of delivering high-quality, user-friendly
          software solutions.
        </p>

        <nav class="mt-8 flex gap-3">
          <a href="/experience">
            Experience
          </a>
          <a href="/skills">
            Skills
          </a>
          {
            /* <a href="/blog">
            Blog
          </a> */
          }
          <a href="/portfolio">
            Portfolio
          </a>
          <a href="/education">
            Education
          </a>
        </nav>

        <About />
      </div>
    </>
  );
}
