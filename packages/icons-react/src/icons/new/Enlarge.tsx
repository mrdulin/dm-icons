// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Enlarge = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M805.184 458.112h-76.8v-108.16L520.32 558.208l-27.136-27.2-27.136-27.136 208.128-208.128h-108.16v-76.8h239.168v239.232zm153.664 500.736H65.088V65.088h893.76zm-816.96-357.12h173.376c61.824 0 112 50.112 112 112v168.32h454.784v-740.16h-740.16V601.6z" })))
        } />;
      }

      export default Enlarge;