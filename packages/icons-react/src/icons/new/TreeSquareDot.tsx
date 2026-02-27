// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TreeSquareDot = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M362.624 85.312h298.688V384H554.624v99.52H832V640h106.624v298.688H640V640h106.624v-71.104H277.312v71.04H384v298.752H85.312V640H192V483.52h277.312V384H362.624zM576 298.688v-128H448v128zM170.624 725.312v128h128v-128zm554.688 0v128h128v-128z" })))
        } />;
      }

      export default TreeSquareDot;