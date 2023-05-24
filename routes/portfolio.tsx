import { Head } from "$fresh/runtime.ts";
export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <section id="portfolio">
        <h2>Portfolio</h2>
        <ul>
          <li>
            <h3>Graphic Design</h3>
            <p>Logos & stationery</p>
            <img
              src="Visual Design.png"
              alt="logos and business cards"
            />
          </li>
          {
            /* <li>
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
          </li> */
          }
        </ul>
      </section>
    </>
  );
}
