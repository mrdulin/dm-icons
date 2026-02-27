// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Building3 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M341.312 85.312h341.312v128h128V384h128v554.688H85.312V384h128V213.312h128zm85.312 128h170.688v-42.624H426.624v42.688zM298.624 384h426.688v-85.312H298.624zm-128 85.312v384h170.688v-256h341.312v256h170.688v-384zm426.688 384V682.688H426.624v170.688h170.688z" })))
        } />;
      }

      export default Building3;