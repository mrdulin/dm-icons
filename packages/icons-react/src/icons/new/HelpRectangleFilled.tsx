// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const HelpRectangleFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M938.624 85.312v853.376H85.312V85.312zm-507.136 280.96a85.376 85.376 0 1 1 133.248 95.488c-18.56 14.656-41.728 33.6-60.16 56.192-18.56 22.912-35.264 53.12-35.264 90.048v53.312h85.312V608c0-10.176 4.48-21.76 16.128-36.16 11.904-14.72 28.352-28.544 46.72-43.072a170.688 170.688 0 1 0-266.496-190.976l-14.144 40.192 80.448 28.48 14.208-40.256zM554.816 704h-85.504v85.504h85.504z" })))
        } />;
      }

      export default HelpRectangleFilled;