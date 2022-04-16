import React from "react";
import profilepic from "../../assets/profilepic.jpg";

function About() {
  return (
    <section>
      <div className="about">
        <h1 id="about">About Me</h1>
        <img className="profilepic" src={profilepic} alt="Megan" />
        <div>
          <p className="">
            Hi, I'm Megan and I am new to the tech industry. Originally have my
            Masters in Occupational Therapy. Been working as an Occupational
            Therapist for 8 years now and needed a change. I wanted to branch
            out into a career where I could put my creative, problem solving
            brain to work. Also, wanted to transition to a job with more
            flexibility and the option to work remotely so that I can travel
            more! Did my research and stumbled upon coding and becoming a
            developer. I learned that attending a coding bootcamp provides
            similar if not the same training a computer science degree receives.
            Luckily there was a program through a great college close to where I
            live, University of Minnesota. I am currently emersed in this coding
            bootcamp and hopefully will soon develop the skills to start a
            career as a developer!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
