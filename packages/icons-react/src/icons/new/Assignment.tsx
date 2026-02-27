// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Assignment = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 106.688a64 64 0 0 0-58.688 38.4l-11.136 25.6H192v682.624h640V170.688H581.888l-11.2-25.6a64 64 0 0 0-58.688-38.4M389.44 85.312a149.12 149.12 0 0 1 122.56-64 149.12 149.12 0 0 1 122.56 64h282.816v853.376H106.688V85.312zm-90.752 213.376h426.688V384H298.688zm0 170.624h426.688v85.376H298.688zm0 170.688h298.688v85.312H298.688z" })))
        } />;
      }

      export default Assignment;