// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MergeCellsFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M469.312 85.312h-384v853.376h384V725.312h85.312v213.376h384V85.312h-384v213.376h-85.312zM733.12 436.544 657.664 512l75.456 75.392-60.352 60.352L536.96 512l135.808-135.744zM355.392 376.32 491.136 512l-135.68 135.744-60.416-60.288L370.56 512l-75.52-75.392 60.352-60.352z" })))
        } />;
      }

      export default MergeCellsFilled;