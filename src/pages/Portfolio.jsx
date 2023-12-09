
import { Project } from '../components/Project'

function Portfolio() {
  return (
    <div>
      <section id="project-heading" className="work">
        <div className="flex-row">
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects">
          <Project name={'Workday Scheduler'} description={'This application allows users to add/delete tasks for the current day.'} imgAlt={'Image of an hourly scheduler.'} imgSrc={'./images/workday-scheduler.png'} application={'https://kayla-sullens.github.io/Work-Day-Scheduler/'} repo={'https://github.com/Kayla-Sullens/Work-Day-Scheduler'} />
          <Project name={'MVC Group Project'} description={'This was a group project done to show our knowledge of the MVC framework.'} imgAlt={'Image of a signin/signup page for Bookworm Connection.'} imgSrc={'./images/bookworm-connection.png'} application={'https://aqueous-wildwood-40784-bbb428a30b2f.herokuapp.com/login'} repo={'https://github.com/Kayla-Sullens/Bookworm-Connection'}/>
          <Project name={'Weather Dashboard'} description={'Check the weather for any city!'} imgAlt={'Image of search page for a weather dashboard.'} imgSrc={'./images/weather-dashboard.png'} application={'https://kayla-sullens.github.io/Weather-Dashboard/'} repo={'https://github.com/Kayla-Sullens/Weather-Dashboard'} />
          <Project name={'Note Taker'} description={'Express project that allows users to take notes online, and save or delete them as needed.'} imgAlt={'Image of a note taker app that says Get Started.'} imgSrc={'./images/note-taker.png'} application={'https://agile-gorge-92951-b2ca71eaae04.herokuapp.com/'} repo={'https://github.com/Kayla-Sullens/Note-Taker'}/>
          <Project name={'Coding Quiz'} description={'Quiz app to test knowledge of coding.'} imgAlt={'Image of coding quiz that shows a question and the timer.'} imgSrc={'./images/coding-quiz.png'} application={'https://kayla-sullens.github.io/Coding-Quiz-2/'} repo={'https://github.com/Kayla-Sullens/Coding-Quiz-2'}/>
          <Project name={'Password Generator'} description={'Password generator to show JavaScript skills.'} imgAlt={'Image of password generator application.'} imgSrc={'./images/password-generator.png'} application={'https://kayla-sullens.github.io/Password-Generator-JS/'} repo={'https://github.com/Kayla-Sullens/Password-Generator-JS'}/>
        
        </div>
      </section>
    </div>
  );
}

export default Portfolio;