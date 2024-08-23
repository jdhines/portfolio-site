import { Head } from "$fresh/runtime.ts";
import { Nav } from "../components/Nav.tsx";
import { About } from "../components/About.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jess Hines - Home</title>
      </Head>
      <div class="bio flex">
      <h1 class="font-mono text-lg uppercase my-4">Jess Hines | </h1>
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
      <p class="mb-8">
        Hi! I'm a passionate web designer with a strong focus on user
        experience. As a Principal Software Engineer with 15 years of
        experience in UX/UI design, web development, and agile leadership, I
        have a proven track record of delivering high-quality, user-friendly
        software solutions.
      </p>
      <About />
    </>
  );
}
