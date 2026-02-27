// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const HospitalFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M853.312 85.312H170.624v85.376h42.688v170.688h-128v597.312h277.312V640h298.688v298.688h277.312V341.312h-128V170.688h42.688V85.376zm-298.688 213.44H640V384h-85.376v85.312h-85.312V384H384v-85.312h85.312v-85.312h85.312v85.312zM448 938.688V725.376h128v213.312z" })))
        } />;
      }

      export default HospitalFilled;