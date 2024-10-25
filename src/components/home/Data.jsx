import React from 'react';

export const Data = () => {
  return (
    <div className="data__home">

      <div className="content">

        <h1 className="home__title">
        <span class="typed-text"></span><span class="cursor"></span>
          Marlene Sanchez
          <svg
            width="36"
            height="36"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home__hand"
          >
            {/* SVG paths */}
          </svg>
        </h1>
        <h3 className="home__subtitle"> Full Stack Developer </h3>
        <p className="home__description">
        Hi. I'm Vanessa Marlene. I’m a Software Engineer with ~3 years of experience in front-end and UX/UI, now broadening my expertise in back-end to create fully integrated solutions.
        </p>
      </div>
    </div>
  );
};
