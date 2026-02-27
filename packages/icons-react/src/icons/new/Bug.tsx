// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Bug = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M391.296 213.312h241.408a128 128 0 0 0-241.408 0M298.688 256a213.312 213.312 0 1 1 426.624 0v42.688H298.688zm-85.376-85.312V280.96l60.352 60.288h476.672l60.352-60.288V170.688H896v145.664l-128 128V512h128v85.312H768v67.712l128 128v145.664h-85.312V828.352l-58.048-58.048a256.38 256.38 0 0 1-197.952 164.8v3.584H512a256.13 256.13 0 0 1-240.64-168.384l-58.048 58.048v110.336H128V792.96l128-128v-67.648H128V512h128v-67.648l-128-128V170.688zm128 273.664v238.336c0 79.488 54.4 146.304 128 165.248V426.688H359.04l-17.664 17.664zm213.376-17.664v421.248c73.6-18.944 128-85.76 128-165.248V444.352l-17.728-17.664z" })))
        } />;
      }

      export default Bug;