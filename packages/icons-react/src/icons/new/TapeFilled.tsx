// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TapeFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 128v768h938.688V128zM768 298.688H256l-64-85.376h640zM426.688 576a106.688 106.688 0 1 1-213.312 0 106.688 106.688 0 0 1 213.312 0m384 0a106.688 106.688 0 1 1-213.312 0 106.688 106.688 0 0 1 213.312 0" })))
        } />;
      }

      export default TapeFilled;