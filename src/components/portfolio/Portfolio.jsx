
import React, { useEffect, useState } from 'react';
import { contentPortfolio, designPortfolio, featuredPortfolio, mobilePortfolio, webPortfolio } from "../../data";
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
      id: "mobile",
      title: "Mobile App"
    },
    {
      id: "design",
      title: "Design"
    },
    {
      id: "content",
      title: "Content"
    }
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
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
