import { Head } from "$fresh/runtime.ts";
import QuoteCard from "../components/QuoteCard.tsx";

export default function FeedbackPage() {
  return (
    <>
      <Head>
        <title>Feedback</title>
      </Head>
      <h2>Feedback</h2>
      <section id="skills">
        <div className="flex flex-wrap gap-3 basis-1/2">
        <QuoteCard
          className="basis-1/2"
          person="Matt Hubing"
          title="Principal UX Designer">
            Jess is a designer/developer hybrid in an org with a low UX maturity, but he's been building support for a user-centered design process and challenging the existing product thinking. Jess is curious, humble, has a wide variety of skills, and the mindset to learn anything he needs to get the job done.
        </QuoteCard>

        <QuoteCard
          class="basis-1/2"
          person="Liz Armbruster"
          title="Director, UX Content Strategy">
            Jess has done some amazing work for the project. The project lead is very impressed by the quality of design Jess has produced along with his responsiveness. It’s very noticeable and notable when someone makes a commitment and then actually delivers on that commitment as part of a volunteer project.
        </QuoteCard>

        <QuoteCard
          person="Mark McDaniel"
          title="Sr. Business Analyst">
            Jess has done a great job digging into a tool he was asked to support following the departure of the dedicated resource. He has helped us understand business rules applied, provided a path to create a solution and managed the release. Great job.
        </QuoteCard>

        <QuoteCard
          person="Jeff Weller"
          title="Squad Leader, PDP Strategy & Execution">
            Jess Hines has been a key resource and trusted voice on the Data Conversion and Implementation team. He has led our team in all things related to user experience design. Jess has worked on multiple projects over the years, both designing and developing tools to help these teams successfully bring new clients into the firm. He has a very broad skill set, but his passion is definitely focused on the user experience.
        </QuoteCard>

        <QuoteCard
          person="Srushti Honnenahalli"
          title="Associate Software Engineer">
            Jess actively searches for better methods to enhance the teams contribution to development and encourages us to ask questions and share ideas. Jess always documents new tool features & ideas to make sure we all are aware or can refer to his information to assist our project tasks.
        </QuoteCard>

        <QuoteCard
          person="James Fleckenstein"
          title="Front end developer">
          With the recent cloud migration efforts, Jess has definitely inspired in me persistence and a drive for continuous learning. There is rarely a ready-made, already solved, "perfect" solution for a project, even less so for cloud deployments. Yet, that never stopped Jess from exploring and pushing for novel solutions to our projects.
        </QuoteCard>

        <QuoteCard
          person="Rick Adamson"
          title="Director, Regional Leadership Office">
            Jess’ work was absolutely outstanding worthy of this note. Over 1,400 associates attended the [NC Career Fair] and Jess went above and beyond to ensure all of our elements were consistently and properly branded. He was a very welcome addition to the Regional Planning team and is an associate with incredible skills and talent.
        </QuoteCard>

        <QuoteCard
          person="Ken Tavares"
          title="Sr. Business Analyst">
            I really appreciate his ability to look at a set of requirements and provide feedback/suggestions that results in a change in requirements but delivers a higher quality product/improved client experience. I have a lot of confidence in knowing that Jess will deliver without any impediments or constraints. Jess delivers quality work with little to no rework within the expected time frame. He’s very personable and willing to work with you on any adjustments needed on the requirements.
        </QuoteCard>
        <QuoteCard
          person="Kristopher Lamb"
          title="Business Analyst, Customer Solutions">
            What I appreciated from Jess was his overall flexibility and responsiveness. Understanding that we made a lot of changes and sometimes requirements changed from what we learned, Jess was always willing to work with what we needed and help when there was an urgent need.
        </QuoteCard>
        </div>
      </section>
    </>
  );
}