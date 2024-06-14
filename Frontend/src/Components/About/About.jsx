import React from 'react'
import "./about.css"

const About = () => {
  return (
    <section id="about">
        <div class="container">
        <h1>About Me</h1>
        <div class="about-content">
            <div class="profile-image">
            <img src="your-profile-image.jpg" alt="Profile Picture" />
            </div>
            <div class="about-text">
            <p>Hello! I'm Samuel Tilahun, a passionate full stack web developer. I specialize in creating dynamic and beautiful web applications. I have a knack for problem-solving and a keen eye for detail. When I'm not coding, you can find me exploring new technologies, reading tech blogs, or enjoying outdoor activities.</p>
            <p>Feel free to browse through my portfolio to see some of the projects I've worked on. I'm always open to discussing new opportunities and collaborations. Let's build something amazing together!</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default About