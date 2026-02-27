// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const NotificationFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 0a341.31 341.31 0 0 0-341.376 341.312V541.76l-85.312 128v183.552h853.312V669.76l-85.312-128V341.312A341.31 341.31 0 0 0 512 0m0 1002.688A149.38 149.38 0 0 1 368.768 896H655.04A149.38 149.38 0 0 1 512 1002.688" })))
        } />;
      }

      export default NotificationFilled;