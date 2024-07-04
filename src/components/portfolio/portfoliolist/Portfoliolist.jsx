// En portfoliolist.jsx
import React from 'react';
import "./portfoliolist.css";

export const Portfoliolist = ({ id,title,active,setSelected }) => {
  return (
    <li className={active ? "Portfoliolist active" : "Portfoliolist"} onClick={()=>setSelected(id)}>
      {title}
    </li>
  );
};
