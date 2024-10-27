import React from 'react';
import AnimatedCursor from "react-animated-cursor";

export const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={15}  
      outerSize={10}
      color='0, 153, 255' 
      outerAlpha={0.3}
      innerScale={0.6}  
      outerScale={3} 
      clickables={[
        'a', 'button', 'input[type="submit"]', '.link', '.custom'
      ]}  
    />
  );
};
