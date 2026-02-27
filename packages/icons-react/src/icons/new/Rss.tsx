// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Rss = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128 128h42.688C571.264 128 896 452.736 896 853.312V896h-85.312v-42.688c0-353.472-286.528-640-640-640H128zm0 298.688h42.688a426.69 426.69 0 0 1 426.624 426.624V896H512v-42.688A341.31 341.31 0 0 0 170.688 512H128zm0 384a85.312 85.312 0 1 1 170.688 0 85.312 85.312 0 0 1-170.688 0" })))
        } />;
      }

      export default Rss;