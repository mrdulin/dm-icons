// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const PenBrush = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 938.688h154.56a128 128 0 0 0 90.496-37.504l630.976-630.976L753.728 62.72 122.88 693.632a128 128 0 0 0-37.504 90.496v154.56zm85.312-85.312v-69.248a42.37 42.37 0 0 1 12.544-30.144L275.2 661.76l86.912 87.04-92.032 92.032A42.62 42.62 0 0 1 240 853.376h-69.44zm251.84-164.928-86.912-86.912L753.728 183.36l86.912 86.848z" })))
        } />;
      }

      export default PenBrush;