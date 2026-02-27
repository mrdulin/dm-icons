// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Castle5Filled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M853.312 128V85.312h85.312v853.376h-384V640h-85.312v298.688h-384V85.312h85.312V128h170.688V85.312h85.312v304.32L512 332.672l85.312 56.96V85.312h85.312V128zm-512 85.312H170.624v640H256V426.688h85.312zm341.312 213.376H768v426.624h85.312v-640H682.624z" })))
        } />;
      }

      export default Castle5Filled;