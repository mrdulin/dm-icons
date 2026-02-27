// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ThumbDownFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m464.128 964.992 54.592-9.088a170.69 170.69 0 0 0 142.592-168.32v-104.96h226.944c52.736 0 92.864-47.36 84.224-99.328l-71.168-426.688a85.31 85.31 0 0 0-84.16-71.296H298.624V563.2l165.504 401.92zm-293.504-367.68v-512H85.312v512z" })))
        } />;
      }

      export default ThumbDownFilled;