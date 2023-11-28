import React from "react";
import "../style/About.css";
import KaylaPhoto from '../images/KaylaPhoto.jpg'

export const About = () => {
    return (
        <div class="container about">
            <div class="pt-4 heading_about">
                <h1>About Me</h1>
            </div>
            <div class="row pt-4 container about_container">
                <div class="col justify-content-center align-self-center about_me">
                    <div class="about_me-image">
                        <img
                            src={KaylaPhoto}
                            class="img-fluid"
                            alt="Kayla Sullens Profile Photo"
                        />
                    </div>
                </div>
                <div className="col container-sm about-content">
                    <p>
                        My name is Kayla Sullens, and I am a Math Educator turned Software
                        Developer. I have been married for 10 years, and we have a
                        5-year-old daughter. I live in Southern California, and I have been working
                        remote for 5 years now. While I have loved teaching Math in different capacities
                        over the last 10 years, it's time for me to make a change. My best days have been
                        those at my computer creating things, and I want to have more of those days. I was
                        always fascinated by software development and coding, but never thought
                        I was smart enough to do it. Now, I have the confidence to know that I
                        can do hard things and I'm excited to switch careers and learn a lot of
                        new things.
                    </p>
                </div>
            </div>
        </div>
    );
}

