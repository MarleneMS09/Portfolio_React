import React from 'react';
import AnimatedCursor from "react-animated-cursor";

export const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={20}
      outerSize={10}
      color='0, 153, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        {
          target: 'a',
          options: {
            color: '0, 153, 255', 
          },
        },
        {
          target: 'input[type="text"]',
          options: {
            color: '0, 153, 255',
          },
        },
        {
          target: 'input[type="email"]',
          options: {
            color: '0, 153, 255',
          },
        },
        {
          target: 'input[type="number"]',
          options: {
            color: '0, 153, 255', // Azul claro
          },
        },
        {
          target: 'input[type="submit"]',
          options: {
            color: '0, 153, 255', // Azul claro
          },
        },
        {
          target: 'input[type="image"]',
          options: {
            color: '0, 153, 255', // Azul claro
          },
        },
        {
          target: 'label[for]',
          options: {
            color: '0, 153, 255', // Azul claro
          },
        },
        {
          target: 'select',
          options: {
            color: '0, 153, 255', // Azul claro
          },
        },
        {
          target: 'textarea',
          options: {
            color: '0, 153, 255', // Azul claro
          },
        },
        {
          target: 'button',
          options: {
            color: '0, 153, 255', // Azul claro
          },
        },
        {
          target: '.link',
          options: {
            color: '0, 153, 255', // Azul claro
          },
        },
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '0, 153, 255', // Azul claro
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    />
  )
}
