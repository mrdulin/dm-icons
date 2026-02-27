// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FogNight = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m465.728 24.96-19.2 71.424c-12.8 47.616-11.52 99.712 2.944 153.792a298.688 298.688 0 0 0 419.904 190.976l65.728-32.064-4.416 72.96c-2.624 44.16-16 87.936-39.168 134.4l-19.136 38.144-76.288-38.208 19.072-38.144c5.632-11.328 10.432-22.08 14.4-32.448A384 384 0 0 1 367.04 272.256a409.2 409.2 0 0 1-14.4-121.664 341.44 341.44 0 0 0-177.664 393.984c.704 2.624 3.648 10.752 7.424 20.48l4.48 11.392 1.472 3.52.384.96.064.256 16.128 39.552-78.976 32.192-16.128-39.488-.192-.384-.384-1.088-1.536-3.84-4.864-12.224a348 348 0 0 1-10.24-29.248A426.69 426.69 0 0 1 394.24 44.16zM85.376 725.312h256v85.376h-256zm341.312 0h512v85.376h-512zM725.376 896h213.312v85.312H725.376zm-640 0H640v85.312H85.376z" })))
        } />;
      }

      export default FogNight;