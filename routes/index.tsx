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
            Tucson, AZ | <></>
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
          experience. I have over 15 years of experience in web design and
          devlopment, and I'm skilled in a variety of front-end frameworks. I'm
          also a creative thinker and am always looking for new ways to improve
          the user experience.
        </p>

        <nav class="flex gap-3">
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
      <footer class="p-4 mx-auto max-w-screen-md">
        <p>Copyright &copy; 2023</p>
      </footer>
    </>
  );
}
