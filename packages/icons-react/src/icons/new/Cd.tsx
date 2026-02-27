// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Cd = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768M42.688 512a469.312 469.312 0 1 1 938.688 0 469.312 469.312 0 0 1-938.688 0m426.688-341.312H512A341.31 341.31 0 0 1 853.376 512v42.688H768V512a256 256 0 0 0-256-256h-42.624zm42.624 256a85.312 85.312 0 1 0 0 170.624 85.312 85.312 0 0 0 0-170.624M341.376 512a170.688 170.688 0 1 1 341.312 0 170.688 170.688 0 0 1-341.312 0" })))
        } />;
      }

      export default Cd;