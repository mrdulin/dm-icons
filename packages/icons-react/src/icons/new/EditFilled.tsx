// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const EditFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M792.768 125.632a85.31 85.31 0 0 0-120.704 0l-70.144 70.144L828.16 422.08l70.208-70.208c33.28-33.28 33.28-87.36 0-120.64zm-24.96 356.8-226.24-226.304-376.96 376.96-45.952 272.256 272.256-45.952 376.96-376.96z" })))
        } />;
      }

      export default EditFilled;