// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Dashboard1 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 85.312h384V384h-384zm85.312 85.376v128H384v-128zm384-85.376h384v469.376h-384zM640 170.688v298.624h213.312V170.688zM85.312 469.312h384v469.376h-384zm85.312 85.376v298.624H384V554.688zm384 85.312h384v298.688h-384zM640 725.312v128h213.312v-128z" })))
        } />;
      }

      export default Dashboard1;