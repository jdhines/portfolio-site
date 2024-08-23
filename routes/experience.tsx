import { Head } from "$fresh/runtime.ts";
export default function ExperiencePage() {
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      <div class="flex justify-between">
        <h2>Experience</h2>
        <a href="/Jess-Hines-Resume.pdf">View PDF resume</a>
      </div>

      <section>
        <h3>Tech Lead, Principal Software Engineer</h3>
        <p>Fidelity Investments</p>
        <p>2015 - Present</p>
        <ul class="list-disc">
          <li>
            Improved business unit efficiency by designing and developing applications and automation tools, reducing productivity waste by $3M per year and reducing project timelines by 200-600% resulting in increased customer satisfaction.
          </li>
          <li>
            Designed and developed applications and tools for internal partners to improve efficiency and customer satisfaction. UX/UI design, web design, and Azure Cloud. Fluent in HTML, CSS, and Javascript. Can speak comfortable to users, stakeholders, developers, and management alike.
          </li>
          <li>
            Spearheaded user research, UX/UI design, and development to replace legacy applications, resulting in better usability and automation.</li>
          <li>
            Utilized strong writing skills for clear content design, technical writing, documentation, and presentations.
          </li>
          <li>
            Technical lead, coach, and product owner of an agile squad focused on innovation and automation projects. Interviewed and hired for both junior and senior positions.
          </li>
          <li>
            Drove the replacement of legacy applications with modern web and cloud technologies, CI/CD, and development leadership, resulting in more automation, higher quality, improved user and client satisfaction, and enhanced associate experience.
          </li>
          <li>
            Advocated for and taught clean coding principles for improved quality, developer satisfaction, and enhanced ability to refactor and maintain.
          </li>
        </ul>
      </section>

      <section>
        <h3>Senior Software Engineer</h3>
        <p>Fidelity Investments</p>
        <p>2012 - 2015</p>
        <ul class="list-disc">
          <li>
            Led the requirements gathering, UX/UI design, and web development of a full-stack web application to migrate from single-use, unmaintainable MS Access applications and deliver consistency and vastly improved usability and automation for a core business unit.
          </li>
          <li>
            Invented a method to do test-driven development (TDD) within
            VBA/Excel for faster development and better communication with
            business stakeholders
          </li>
          <li>
            Expanded the FirstLine suite of interactive data templates by 200% to increase the efficiency and shorten timelines for more business units. Invented a test-driven development (TDD) process for faster development and better communication with business stakeholders
          </li>
          <li>
            Hosted training sessions on topics such as Git, agile, design principles, clean coding practices, and presentation design.
          </li>
        </ul>
      </section>

      <section>
        <h3>Software Engineer</h3>
        <p>Fidelity Investments</p>
        <p>2010 - 2012</p>
        <ul class="list-disc">
          <li>
            Led research, project planning, and development of a new reporting platform to automate and standardize client reports across business units, bringing portable Excel reports to clients versus the old 1000-page PDF documents that clients hated and that were difficult to analyze and approve.
          </li>
          <li>
            Expanded the FirstLine suite to cover more layouts with Stock Plan Services, while also refactoring for improved speed of delivery, performance, and accuracy.
          </li>
        </ul>
      </section>
      <section>
        <h3>Associate Software Engineer</h3>
        <p>Fidelity Investments</p>
        <p>2008 - 2010</p>
        <ul class="list-disc">
          <li>
            Designed and built a first-of-its-kind automated validation template (FirstLine) for clients to use, saving them and Fidelity dozens of hours and thousands in implementation costs per project, with an estimated $1+ million in savings in the first year of use, plus greatly increased client satisfaction.
          </li>
          <li>
            Performed data analysis and validation and supported implementations of external clients' stock compensation plans.
          </li>
          <li>
            Worked with outside clients and implementation managers to deliver best-in-class conversion services for employee benefits data.
          </li>
        </ul>
      </section>
    </>
  );
}
