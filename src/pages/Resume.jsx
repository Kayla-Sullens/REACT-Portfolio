import React from "react";
import ResumePDF from "./Resume.pdf";


export default function Resume() {
    return (
            <div>
                <a
                    href={ResumePDF}
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
        <p className="skills">Skills</p>
        <ul className="resumeSkills">
            <li>HTML, CSS, Javascript</li>
            <li>Express, Node, MySQL</li>
            <li>React</li>
        </ul>
      </div>
    </div>
        
    );
}

