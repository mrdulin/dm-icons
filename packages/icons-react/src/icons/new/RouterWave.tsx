// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const RouterWave = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512.192 128a426.3 426.3 0 0 0-359.488 196.736l-23.04 35.968-71.872-46.08 23.04-35.904a511.62 511.62 0 0 1 431.36-236.032 511.62 511.62 0 0 1 431.36 236.032l23.04 35.904-71.872 46.08-23.04-35.968A426.3 426.3 0 0 0 512.192 128m-.512 170.24a213.12 213.12 0 0 0-179.776 98.368l-23.04 35.968-71.808-46.08 23.04-35.904A298.5 298.5 0 0 1 511.68 212.928c105.728 0 198.592 54.912 251.584 137.6l23.04 35.968-71.808 46.08-23.04-35.968A213.12 213.12 0 0 0 511.68 298.24m43.008 171.136v128h298.688v384H170.688v-384h298.624v-128zM256 682.688V896h512V682.688z" })))
        } />;
      }

      export default RouterWave;