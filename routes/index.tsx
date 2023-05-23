import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <header>
          <h1>My Design Portfolio</h1>
          <p>
            I'm a web designer, web developer, and UX designer skilled in
            front-end frameworks.
          </p>
        </header>

        <section id="about-me">
          <h2>About Me</h2>
          <p>
            Hi! I'm Jess. I'm a passionate designer with a strong focus on user
            experience. I have over 15 years of experience in web design and
            devlopment, and I'm skilled in a variety of front-end frameworks.
            I'm also a creative thinker and I'm always looking for new ways to
            improve the user experience.
          </p>
          <p>
            I'm currently working as a Principal Software Engineer and tech lead
            at Fidelity Investments, where I'm responsible for building
            applications that employ great user experience to support our
            associates in being more efficient and productive during complex and
            challenging client implementations. In this role I oversee a team of
            several more junior developers, planning out the work, and building
            a team dedicated to discovering problems and solving for user needs.
          </p>
          <p>
            I'm always looking for new challenges, and am always eager to learn.
          </p>
          <p>
            Outside of work, I love mountain biking, woodworking, and playing
            games with my family.
          </p>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <ul>
            <li>
              <h3>Senior UX Designer</h3>
              <p>Google</p>
              <p>2016 - Present</p>
            </li>
            <li>
              <h3>UX Designer</h3>
              <p>Acme Corporation</p>
              <p>2013 - 2016</p>
            </li>
            <li>
              <h3>Freelance Designer</h3>
              <p>2010 - 2013</p>
            </li>
          </ul>
        </section>

        <section id="portfolio">
          <h2>Portfolio</h2>
          <ul>
            <li>
              <h3>Project 1</h3>
              <p>A website for a small business</p>
              <img
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Project+1&w=300&h=300&bg=E4E4E4&txtcolor=444444&f=arial"
                alt="Project 1"
              />
            </li>
            <li>
              <h3>Project 2</h3>
              <p>A mobile app for a startup</p>
              <img
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Project+2&w=300&h=300&bg=E4E4E4&txtcolor=444444&f=arial"
                alt="Project 2"
              />
            </li>
            <li>
              <h3>Project 3</h3>
              <p>A website for a non-profit organization</p>
              <img
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Project+3&w=300&h=300&bg=E4E4E4&txtcolor=444444&f=arial"
                alt="Project 3"
              />
            </li>
          </ul>
        </section>

        <section id="education">
          <h2>Education</h2>
          <ul>
            <li>
              <h3>Bachelor of Arts in Graphic Design</h3>
              <p>Harding University</p>
              <p>2003 - 2007</p>
            </li>
          </ul>
        </section>
      </div>
      <footer class="p-4 mx-auto max-w-screen-md">
        <p>Copyright &copy; 2023</p>
      </footer>
    </>
  );
}
