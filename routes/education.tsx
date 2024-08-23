import { Head } from "$fresh/runtime.ts";
import { Nav } from "../components/Nav.tsx";
export default function EducationPage() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <h2>Education</h2>
      <div class="mt-4 flex flex-cols items-top gap-3">
        <a href="https://www.harding.edu/business-admin/index.html" target="_blank" rel="nofollow">
          <img width="260px" class="border-solid border-orange-600 border-2" src="/Harding.University.Logo.jpg" alt="logo for Harding University" />
        </a>
        <div>
          <h3>
            Bachelor of Business Administration in Information Technology
          </h3>
          <p>
            <a href="https://www.harding.edu/business-admin/index.html" target="_blank" rel="nofollow">
              Harding University
            </a>
          </p>
          <p>2003 - 2007<br/>Summa cum laude</p>
        </div>
      </div>
    </>
  );
}
