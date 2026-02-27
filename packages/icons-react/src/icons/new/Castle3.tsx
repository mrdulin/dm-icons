// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Castle3 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M853.312 85.312V128H682.624V85.312h-85.312v341.376H426.624V85.376h-85.312V128H170.624V85.312H85.312v853.376h853.312V85.376h-85.312zm-682.688 128h170.688v213.376H256v426.688h-85.376v-640zm170.688 640V512h341.312v341.376h-128V640h-85.312v213.376h-128zm426.688 0v-426.56h-85.376V213.376h170.688v640H768z" })))
        } />;
      }

      export default Castle3;