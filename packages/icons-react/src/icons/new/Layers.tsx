// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Layers = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m512 81.792 430.912 179.52L512 440.96 81.088 261.312zm-209.088 179.52L512 348.416l209.088-87.04L512 174.144zm-217.6 164.48L512 609.728 938.688 425.92v93.056L528.896 695.36 512 702.592l-16.896-7.232L85.312 518.976v-93.12zm0 256L512 865.728 938.688 681.92v93.056L528.896 951.36 512 958.592l-16.896-7.232L85.312 774.976V681.92z" })))
        } />;
      }

      export default Layers;