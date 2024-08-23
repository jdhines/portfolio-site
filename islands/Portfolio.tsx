import {useState} from 'preact/hooks';
import  MediqPortfolio from '../components/Mediq.tsx';

export default function Portfolio() {
  const [selected, setSelected] = useState('mediq');
  const handleClick = (section) => {
    setSelected(section);
  };
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <nav class="mt-8 flex gap-3">
        <a href="#" onClick={() => handleClick('mediq')}>
          UX Design
        </a>
        <a href="#" onClick={() => handleClick('graphic-design')}>
          Graphic Design
        </a>
      </nav>
      <div id="graphic-design" style={{ display: selected === 'graphic-design' ? 'block' : 'none' }}>
        <p>Logos & stationery</p>
        <img
          src="Visual Design.png"
          alt="logos and business cards"
        />
      </div>
      <div id="mediq-portfolio" style={{ display: selected === 'mediq' ? 'block' : 'none' }}>
        <p>Mediq</p>
        <MediqPortfolio/>
      </div>
    </section>
  )
}