

// Import images from assets/image folder once added
import { Project } from '../components/Project'

function Portfolio() {
  return (
    <div>
      <section id="project-heading" className="work">
        <div className="flex-row">
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects">
          <Project name={'CSS Snippet Cheatsheet'} description={'This was a mini project I completed with the help of a walkthrough video, to practice and showcase CSS skills.'} imgAlt={'Image of 6 CSS code snippet guides.'} imgSrc={'css-image.png'} href={'https://github.com/Kayla-Sullens/CSS-Snippet-Cheat-Sheet'} />
          <Project name={''} description={''} imgAlt={''} imgSrc={''} href={''} />
          <Project name={''} description={''} imgAlt={''} imgSrc={''} href={''} />
          <Project name={''} description={''} imgAlt={''} imgSrc={''} href={''} />
          <Project name={''} description={''} imgAlt={''} imgSrc={''} href={''} />
          <Project name={''} description={''} imgAlt={''} imgSrc={''} href={''} />
        </div>
      </section>
    </div>
  );
}

export default Portfolio;