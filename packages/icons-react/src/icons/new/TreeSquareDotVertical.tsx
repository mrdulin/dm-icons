// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TreeSquareDotVertical = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M725.312 170.688h128v128h-128zM640 277.312V384h298.624V85.312H640V192H483.52v277.312H384V362.688H85.312v298.624H384V554.688h99.52V832H640v106.688h298.624V640H640v106.688h-71.104V277.312h71.04zm85.312 576v-128h128v128zM298.624 448v128h-128V448z" })))
        } />;
      }

      export default TreeSquareDotVertical;