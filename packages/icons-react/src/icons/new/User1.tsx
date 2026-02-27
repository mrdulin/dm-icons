// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const User1 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 170.688a128 128 0 1 0 0 256 128 128 0 0 0 0-256m-213.376 128a213.312 213.312 0 1 1 426.688 0 213.312 213.312 0 0 1-426.688 0m-149.312 512a213.31 213.31 0 0 1 213.312-213.376h298.688a213.31 213.31 0 0 1 213.312 213.376V896h-85.312v-85.312a128 128 0 0 0-128-128H362.624a128 128 0 0 0-128 128V896h-85.312z" })))
        } />;
      }

      export default User1;