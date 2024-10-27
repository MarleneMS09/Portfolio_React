import React from 'react';
import './qualification.css';

export const Qualification = () => {
  const experiences = [
    {
      title: 'Front-End Developer & UX/UI Design',
      company: 'Actosoft Mx',
      date: 'July 2024 - Until Now',
      description: 'Lead UX/UI design for the food industry, creating functional and visually appealing interfaces with Figma, React, HTML, and CSS; manage sprints in Asana, collaborate with front-end developers via GitHub, and oversee task management and bug resolution for consistent, goal-aligned deliverables.',
      link: 'https://actosoft.com.mx/frontend',
      linkText: 'Company Page'
    },
    {
      title: 'Instructor Front-End',
      company: 'Technolochicas',
      date: 'April 2024 - July 2024',
      description: 'Teach foundational web development (HTML, CSS, JavaScript) to inspire young girls in tech, fostering an inclusive environment with practical exercises and progress tracking via Google Classroom for personalized feedback.',
      link: 'https://tecnolochicas.mx/',
      linkText: 'Company Page'
    },
    {
      title: 'Full Stack Developer',
      company: 'Vermic Studios',
      date: 'April 2022 - April 2024',
      description: 'Developed responsive, user-focused interfaces using React and Bootstrap, integrated AWS services like CloudFront and S3 for efficient content delivery, and used Docker for consistent environments in an educational e-commerce platform',
      link: 'https://www.vermic.com/',
      linkText: 'Company Page'
    }
  ];

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My journey</span>
      <div className="experience-section">
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-dot" />
              <div className="experience-content">
                <h3 className="experience-position">{experience.title}</h3>
                <h4 className="experience-company">{experience.company}</h4>
                <p className="experience-date">{experience.date}</p>
                <p className="experience-description">{experience.description}</p>
                <a
                  href={experience.link}
                  className="experience-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
