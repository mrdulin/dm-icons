// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const HelpCircle = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m469.376-384a469.312 469.312 0 1 1-938.688 0 469.312 469.312 0 0 1 938.688 0M554.88 778.88h-85.504v-85.568h85.504v85.504zm-85.504-128.192v-53.376c0-36.928 16.64-67.136 35.2-89.984 18.432-22.656 41.6-41.6 60.16-56.256a85.312 85.312 0 1 0-133.248-95.552l-14.144 40.256-80.448-28.416 14.208-40.256A170.688 170.688 0 1 1 617.6 518.144c-18.432 14.464-34.88 28.352-46.72 43.008-11.776 14.4-16.192 26.048-16.192 36.16v53.376z" })))
        } />;
      }

      export default HelpCircle;