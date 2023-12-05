// import resume from './Resume.pdf';
// // Downloadable Resume goes here
// const Resume = () => 
// <>
// <h1>Resume</h1>
//     <iframe src={resume} />
// </>
// export default Resume;

import React from "react";
import ResumePDF from "./Resume.pdf";


export default function Resume() {
    return (
            <div>
                <a
                    href={ResumePDF}
                    download="Kayla Sullens' Resume"
                    target="_blank"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "20px",
                    }} rel="noreferrer"
                >
                    <button id="resume-button" className="resume-button">
                        Click Here to Download My Resume
                    </button>
                </a>
            
                <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>Express, Node, MySQL</li>
            <li>React</li>
        </ul>
      </div>
    </div>
        
    );
}