// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Houses1 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 85.312h853.312v853.376H85.312V85.376zm85.312 85.376v682.624h170.688v-298.56h341.312V853.44h170.688V170.688zm426.688 682.624V640H426.624v213.376h170.688zM341.312 256v128H256V256zm213.312 0v128h-85.312V256zM768 256v128h-85.376V256z" })))
        } />;
      }

      export default Houses1;