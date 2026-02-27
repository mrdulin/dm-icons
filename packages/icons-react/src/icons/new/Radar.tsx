// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Radar = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M469.376 130.368a384 384 0 1 0 353.28 155.776l-25.152-34.496 68.992-50.24 25.088 34.496a469.312 469.312 0 1 1-379.52-193.28h42.624v395.52A85.7 85.7 0 0 1 597.376 512a85.312 85.312 0 1 1-128-73.92V324.8a192.064 192.064 0 1 0 197.952 74.24l-25.152-34.432 68.992-50.24 25.152 34.496a277.312 277.312 0 1 1-266.944-110.912z" })))
        } />;
      }

      export default Radar;