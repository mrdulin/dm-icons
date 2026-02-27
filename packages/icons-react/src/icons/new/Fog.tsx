// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Fog = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M473.6 213.312c-105.216 0-187.776 81.728-187.776 179.2 0 11.2 1.088 22.144 3.136 32.64l9.792 50.752H247.04c-40.64 0-76.416 36.864-76.416 78.72v42.688H85.312v-42.624c0-70.72 48-135.936 115.2-156.992a256 256 0 0 1 0-5.12C200.512 244.864 324.288 128 473.6 128c23.296 0 45.952 2.816 67.648 8.192 91.584 22.656 165.504 90.432 193.408 178.624 30.848 3.904 59.84 13.632 85.76 28.032 73.024 40.512 118.208 130.112 118.208 211.84v42.624h-85.312v-42.624c0-55.424-32.256-113.92-74.24-137.216a154.2 154.2 0 0 0-77.632-19.2l-36.48.512-6.208-35.84c-12.032-69.312-66.112-126.144-137.984-144a196.5 196.5 0 0 0-47.168-5.696zM85.312 640h256v85.312h-256zm341.312 0h512v85.312h-512zm298.688 170.688h213.312V896H725.312zM85.312 896v-85.312H640V896z" })))
        } />;
      }

      export default Fog;