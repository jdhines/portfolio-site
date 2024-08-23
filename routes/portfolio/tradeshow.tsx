import Card from "../../components/Card.tsx";
export default function Tradeshow() {

  return (
    <>
      <Card header="Career Tradeshow - Digital and Physical Design">
        <div class="flex items-center gap-8">
          <img height="60" class="basis-1/4" src="/tradeshow/activate1-logo.png" alt="Activate NC logo" />

          <p class="grow"><b>Role:</b> Logo &amp; print design; digital signage; website design/development</p>
        </div>
      </Card>

      <p><b>Project brief: </b>
        The Activate NC Career Tradeshow was an event for helping associates build their career and aid internal mobility. It featured talks on networking, building resumes, interviewing, and career development. Regional business units as well as employee resource groups and special interest clubs had booths to share information with associates and promote engagement. For the 2018 tradeshow, I was asked if I could design a few things such as a logo, an internal website, and maybe a couple signs. (It ended up being <em>a lot</em> of signs :) )
      </p>

      <h3>More (fun) than expected</h3>
      <p>
        The team organizing the event was entirely made up of volunteers from different business units, under the oversight of the head of the Fidelity Career Center. Some had worked on the first tradeshow the year prior, but I was new to the effort. Since I would need to share and collect feedback from a number of people, I decided to use InVision (an online whiteboard) to let others comment on needed changes, and also pull finished assets for use in emails and other communications as they needed. I very much wanted the whole thing to be open and transparent, and InVision worked great for that.
      </p>
      <p>
        The chosen theme was &ldquo;Discover Your Next Stop&rdquo; and the desire was to utilize a subway metaphor, with various &ldquo;stops&rdquo; to help get you where you want to be career-wise.
      </p>
      <p>
        The work quickly grew in volume as I designed image assets for email and the site, for large 6-foot tall banners, small banners, digital signage, and even for t-shirts and promo items. It was a lot of fun, and the team was great to work with.
      </p>
      <p>
        Since there was only a couple months in which to pull all this together, and a lot of similar-but-different items, I put a major focus on componentizing the designs. Using the design tool Figma made this really nice, and allowed me to build out the different elements while sticking to the subway theme and quickly create (and even more importantly, iterate) the many separate pieces like the (now) 24 signs that would go near each table.
      </p>
      <p><img src="/tradeshow/tradeshow1-figma-screens.png" alt="Figma screens with components for digital and physical signs and banners" /></p>
      <p>
        <p><img src="/tradeshow/tradeshow2-digital-designs.png" alt="Left to right: a 6-foot banner, digital signage, and an email" /></p>
      </p>

      <h3>Bespoke, or Speed?</h3>
      <p>
        In addition to the physical and digital assets needed, the project leader wanted to have a website where people could sign up for the different TED-style talks, download a floor map (another fun design challenge), and get more info about the business units, plus be able to return after the event for video recordings of the sessions. The old site had been done as an Angular 1.x web app by another team in India, but they weren&rsquo;t available to update it, and I wasn&rsquo;t familiar with that v1 of Angular, so it was either learn that quickly, or come up with another solution. In the end, I decided it would be faster and the results would be just as good doing it in our internal online collaboration tool called Ribbit. This already had the built-in ability to create and RSVP to events, and so with a bit of custom HTML, JavaScript, and CSS (in which I rolled my own micro utility-first CSS framework patterned after Tachyons), I was able to put a site together that met all the needs, and as an added bonus had no build step, so changes could be made quickly while I was on the phone with someone, and published immediately (which was also great for fixing typos)!
      </p>
      <p><img src="/tradeshow/tradeshow3-ribbit-screenshot.png" alt="screenshot of the website" /></p>

      <h3>How'd it go?</h3>
      <p>
        The one-day event went off without a hitch (at least, as far as I knew). Associates were able to use the map to find their way around 2 floors in 3 buildings and meet people, learn new things, and make plans for their future careers. I learned a ton about setting time and design constraints, the value of reuse, and design for physical mediums like banners, name badges, t-shirts, and even pens! There were many chances to have spent way more time getting something perfect, or building a cool feature into the site, but I learned that user <em>needs</em> are paramount, and to accept that &ldquo;good enough&rdquo; doesn&rsquo;t have to mean you&rsquo;re cutting corners, but that sometimes &ldquo;more&rdquo; work won&rsquo;t have a big enough return to justify the work. This tradeshow was a lot of work in a short amount of time (for everyone involved), but very rewarding and educational.
      </p>
      <p><img src="/tradeshow/tradeshow4-physical-items.png" alt="branded pen and " /></p>
    </>
  )
}