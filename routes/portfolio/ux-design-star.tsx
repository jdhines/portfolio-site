import Card from "../../components/Card.tsx";
export default function Star() {

  return (
    <>
      <Card header="STAR - Web Application">
        <div class="flex flex-col gap-4">
          <img src="/star/star0-logo.png"/>
          <p class="grow"><b>Role:</b> UX & UI Design, front-end development & deployment</p>
        </div>
      </Card>
      <p><b>Project brief: </b>
        The Data Conversion & Implementation team completes dozens of projects each year for clients like Northrop Gruman, AT&T, TimeWarner Cable, and many companies looking for Fidelity to manage their benefits plans. These projects are complicated, and prior to STAR project information and tracking was done in Excel, Access, and email. Moving to a web app that pulled data from a single system and then allowed team members to add data, create status updates and comments, and track budget brought the number of data sources down to one, and provided people with an easier way to track and report on these important projects, bringing better project management and thus smoother implementations for our valued clients.
      </p>

      <h3>Create or Update?</h3>
      <p>
        We went through an initial period of seeing whether the Access app could just be updated, but since it had been created years earlier by someone who had left, and because the codebase showed a liberal application of Italian seasoning 🍝 and had performance issues, making updates would have worked in the short term, but would have taken a while as well, since understanding the code and updating without breaking would have been important. For all those reasons, we decided that a new web app was the right way to go.
      </p>

      <h3>Initial Mockups</h3>
      <p>
        We knew early on that the web app would need to have feature parity with the old MS Access app, so a lot of the “requirements” were laid out at the start—”just build what we have, but do it online.” But of course I couldn’t just leave it at that and start banging out code.
      </p>
      <p>
        I held a number of what I now realize were design thinking sessions, although at the time I just considered it “finding root problems to solve” vs simply building what the users asked for. A key design focus of mine at this time was providing breathing room for the components, especially since the old Access app was so jam-packed.
      </p>
      <p><img src="/star/star2-mockups.png" alt="mockups of the new web app" /></p>

      <h3>Don’t Fear the “Creep”</h3>
      <p>
        As development of the app continued and we built out the things needed to achieve parity, more people besides myself naturally began asking “what if?” What if we added a few more fields that we’re currently tracking in Excel? What if we could create have a batch of common milestones at a single click instead of adding each individually. While occasionally I was tempted to think of these as “scope creep,” I realized that people were expressing needs for a solution to a problem, and thus these requests were really just building our shared understanding of the problems people were trying to solve, and that’s something I’ve tried to keep in mind with new projects. This is where an incremental process really helps, because you’re not building a fixed set of features to be delivered in a year, you’re building the next most needed solution. That said, this STAR project, having a total feature set from the beginning and an expected timeline made it not really an incremental product like it maybe should have been, but this project (which I also was the acting Scrum Master on) was my first project to use the Agile Scrum methodology of sprints, which allowed us to think in smaller chunks and deliver rapidly.
      </p>
      <p>
        In the end, our small team of one database person, one Java API person, and myself the lone design and development person, released STAR to the users and shut off the Access app with no regret wasted. The app was used for about 4 years before newer technologies and business needs made it obsolete.
      </p>
      <p><img src="/star/star3-full-screen.png" alt="screenshot of the new web application" /></p>
    </>
  )
}