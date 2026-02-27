// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const IndentLeft = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.376 170.688V256h853.312v-85.312zm256 298.624v85.376h597.312v-85.376zM85.376 768h853.312v85.312H85.376zM67.712 512l135.68 135.744 60.416-60.352L188.352 512l75.456-75.52-60.352-60.288-135.744 135.68z" })))
        } />;
      }

      export default IndentLeft;