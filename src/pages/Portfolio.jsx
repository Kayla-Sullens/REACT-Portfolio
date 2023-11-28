

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
          <Project name={''} description={''} imgAlt={''} imgSrc={''} href={''} />
          <Project name={''} description={''} imgAlt={''} imgSrc={''} href={''} />
        </div>
      </section>
    </div>
  );
}

export default Portfolio;