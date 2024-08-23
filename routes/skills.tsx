import { Head } from "$fresh/runtime.ts";
export default function SkillsPage() {
  return (
    <>
      <Head>
        <title>Skills</title>
      </Head>
      <h2>Skills</h2>
      <section id="skills">
        <h3>Highlights</h3>
        <ul class="list-disc mt-4">
          <li>
            <b>Refactoring: </b> continuous improvement and automation
          </li>
          <li>
            <b>Consulting: </b>
            Problem discovery and definition, tech leadership, coaching
          </li>
          <li>
            <b>Communication: </b>
            writing, video, presentation design, public speaking
          </li>
          <li>
            <b>Design: </b>
            User experience, user interface, content design and writing, graphic design
          </li>
          <li>
            <b>Tools: </b>
            Figma, Sketch, Illustrator,Affinity Designer, Miro, Mural
          </li>
          <li>
            <b>Web stack: </b>CSS (Tailwind, Grid, and Flexbox); HTML; JavaScript; front-end frameworks like Vue, Svelte,
            Angular, React, and back-end like Node and Express
          </li>
          <li>
            <b>Development: </b>
            clean coding principles, testing, Git, writing documentation,
            Unix/Mac/Windows, scripting, Vim, Awk, VBA
          </li>
          <li>
            <b>Cloud:</b> Azure fundamentals, serverless, messaging
          </li>
        </ul>
        <h2>Assessments from Pluralsight</h2>
        <p>
          <img
            src="Skills.png"
            alt="summary of skills from Pluralsight assessments"
          />
        </p>
      </section>
    </>
  );
}
