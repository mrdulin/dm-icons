// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const User = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 170.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M277.312 320a234.688 234.688 0 1 1 469.376 0 234.688 234.688 0 0 1-469.376 0M128 810.688a213.31 213.31 0 0 1 213.312-213.312h341.376A213.31 213.31 0 0 1 896 810.688v128H128zm213.312-128a128 128 0 0 0-128 128v42.688h597.376v-42.688a128 128 0 0 0-128-128z" })))
        } />;
      }

      export default User;