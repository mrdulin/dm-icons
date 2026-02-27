// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Pin = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m758.912 29.568 235.584 235.584L722.944 596.8l93.376 93.44-241.472 241.408-211.2-211.2L92.16 992l-60.352-60.352L303.36 660.096l-211.2-211.2 241.408-241.408 93.44 93.312L758.912 29.44zm-184.064 781.44 120.768-120.832-87.68-87.68 271.616-331.584-126.4-126.4-331.904 271.296-87.68-87.68L212.8 448.896l362.048 362.048z" })))
        } />;
      }

      export default Pin;