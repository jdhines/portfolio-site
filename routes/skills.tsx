import { Head } from "$fresh/runtime.ts";
export default function SkillsPage() {
  return (
    <>
      <Head>
        <title>Skills</title>
      </Head>
      <section id="skills">
        <h1>Skills</h1>
        <h2>Highlights</h2>
        <ul class="list-disc mt-4">
          <li>
            <b>Refactoring:</b> continuous improvement and automation
          </li>
          <li>
            <b>Consulting:</b>{" "}
            Problem discovery and definition, tech leadership, coaching
          </li>
          <li>
            <b>Communication:</b>{" "}
            writing, video, presentation design, public speaking
          </li>
          <li>
            <b>Design:</b>{" "}
            UXD, UI design, grpahic design. Tools: Figma, Sketch, Illustrator,
            Affinity Designer
          </li>
          <li>
            <b>Web stack:</b>CSS (including utility-first frameworks, Grid, and
            Flexbox); HTML; JavaScript; front-end frameworks like Vue, Svelte,
            Angular 10+, React, and back-end like Node and Express
          </li>
          <li>
            <b>Development:</b>{" "}
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
