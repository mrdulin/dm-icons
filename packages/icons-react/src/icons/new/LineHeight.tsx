// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const LineHeight = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m243.52 140.48-30.144-30.144-30.208 30.144-97.792 97.856-30.208 30.144 60.352 60.352 30.208-30.144 24.96-24.96v476.544l-24.96-24.96-30.208-30.144-60.352 60.352 30.208 30.144 97.792 97.856 30.208 30.144 30.144-30.144 97.856-97.856 30.144-30.144-60.352-60.352-30.144 30.144-24.96 24.96v-476.48l24.96 24.96 30.144 30.144 60.352-60.352-30.144-30.144-97.856-97.856zm311.168 30.208H512V256h426.688v-85.312zm-85.312 298.624h-42.688v85.376h512v-85.376zM512 768h426.688v85.312H512z" })))
        } />;
      }

      export default LineHeight;