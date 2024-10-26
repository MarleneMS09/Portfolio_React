import React from 'react';
import './qualification.css';

export const Qualification = () => {
  const experiences = [
    {
      title: 'Creador de Contenido',
      company: 'Twitch',
      date: 'Actualmente...',
      description: 'Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.',
      link: 'https://twitch.tv',
      linkText: 'Saber más'
    },
    {
      title: 'Principal Frontend Engineer',
      company: 'Adevinta Spain',
      date: 'Septiembre 2022',
      description: 'Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.',
      link: 'https://adevinta.com',
      linkText: 'Saber más'
    },
    {
      title: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      date: 'Junio 2021 - Agosto 2022',
      description: 'Desarrollé aplicaciones web escalables utilizando tecnologías modernas como React y Node.js. Trabajé en equipo para mejorar la experiencia de usuario y optimizar el rendimiento de la aplicación.',
      link: 'https://techsolutions.com',
      linkText: 'Saber más'
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
