// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Earphone = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 170.688c-188.224 0-341.376 153.792-341.376 344.128v39.872H256a128 128 0 0 1 128 128V768a128 128 0 0 1-128 128H85.312V514.816c0-236.864 190.72-429.44 426.688-429.44 235.904 0 426.624 192.576 426.624 429.44V896H768a128 128 0 0 1-128-128v-85.312a128 128 0 0 1 128-128h85.312v-39.872c0-190.336-153.088-344.128-341.312-344.128M853.312 640H768a42.69 42.69 0 0 0-42.688 42.688V768c0 23.552 19.136 42.688 42.688 42.688h85.312zm-682.688 0v170.688H256A42.69 42.69 0 0 0 298.624 768v-85.312A42.69 42.69 0 0 0 256 640z" })))
        } />;
      }

      export default Earphone;