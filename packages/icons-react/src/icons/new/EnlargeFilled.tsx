// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const EnlargeFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M960 960H64V64h896zM155.264 817.664c0 30.912 25.088 56 56 56h280v-224a112 112 0 0 0-112-112h-224zm474.752-662.72v76.8h108.16l-208.128 208 27.136 27.136 27.136 27.2 208.128-208.128v108.16h76.8V154.88H629.952z" })))
        } />;
      }

      export default EnlargeFilled;