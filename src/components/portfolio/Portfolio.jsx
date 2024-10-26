import React, { useEffect, useState } from 'react';
import designecommerce from "../../assets/Beojnamu3.png"; // Importas la imagen aquí
import { backendPortfolio, contentPortfolio, featuredPortfolio, uxuiPortfolio, webPortfolio } from "../../data";
import './portfolio.css';
import { Portfoliolist } from './portfoliolist/Portfoliolist';

export const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App"
    },
    {
      id: "uxui",
      title: "UX/UI"
    },
    {
      id: "backend",
      title: "Back-End"
    },
    {
      id: "aditional",
      title: "Aditional"
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData([
          {
            id: 1,
            title: "Beojnamu",
            img: designecommerce, 
            url: "https://example.com/social-media-app"
          },
          {
            id: 2,
            title: "Rampa UI Design",
            img: "https://cdn.dribbble.com/users/702789/screenshots/15054318/media/4ea5d492b7b07eebc9528ff960794879.png?compress=1&resize=1200x900",
            url: "https://example.com/social-media-app"
          },
          {
            id: 3,
            title: "E-commerce Web Design",
            img: "https://cdn.dribbble.com/users/1387827/screenshots/15466426/media/deb2dca6762cd3610321c98bfccb0b72.png?compress=1&resize=1200x900",
            url: "https://example.com/social-media-app"
          }
        ]);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "uxui":
        setData(uxuiPortfolio);
        break;
      case "backend":
        setData(backendPortfolio);
        break;
      case "aditional":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <section className='portfolio' id="portfolio">
      <h2 className='section__title'>Portfolio</h2>
      <span className='section__subtitle'>My work</span>
      <ul>
        {list.map(item => (
          <Portfoliolist
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(d => (
          <div className="item" key={d.id}>
            <a href={d.url} target="_blank" rel="noopener noreferrer">
              <img src={d.img} alt={d.title} />
              <h3>{d.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
