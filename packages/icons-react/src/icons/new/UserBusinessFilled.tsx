// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const UserBusinessFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 85.312a234.688 234.688 0 1 0 0 469.376 234.688 234.688 0 0 0 0-469.376m-170.688 512A213.31 213.31 0 0 0 128 810.688v128h768v-128a213.31 213.31 0 0 0-213.312-213.376H623.68L512 820.736l-111.68-223.36h-59.008z" })))
        } />;
      }

      export default UserBusinessFilled;