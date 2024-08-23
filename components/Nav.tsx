export function Nav() {
  return (
    <nav class="nav">
      <a class="title bg-white" href="/">
        <img width="40" src="/logo.svg" title="JH logo: a work in progress, typographically and personally" alt=""/>
      </a>
      <a class = "item" href="/portfolio/ux-design-mediq">Portfolio</a>
      {/* <div class = "dropdown">
        <a class = "item" href="/portfolio">Portfolio</a>
        <div class = "items">
          <a class = "item">UX Design</a>
          <a class = "item">Graphic Design</a>
        </div>
      </div> */}
      <a class="item" href="/experience">
        Experience
      </a>
      <a class="item" href="/education">
        Education
      </a>
    </nav>
  )
}