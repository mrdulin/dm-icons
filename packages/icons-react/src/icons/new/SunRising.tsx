// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SunRising = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M554.688 128v128h-85.312V128zm319.36 167.616-90.496 90.496L723.2 325.76l90.496-90.496zm-663.68-60.352L300.8 325.76l-60.288 60.352-90.56-90.432 60.352-60.352zM512 426.624a170.69 170.69 0 0 0-170.624 170.688V640H256v-42.688a256 256 0 1 1 512 0V640h-85.312v-42.688A170.69 170.69 0 0 0 512 426.688zm-469.312 128h128V640h-128v-85.312zm810.688 0h128V640h-128v-85.312zM512 674.112 652.928 768h328.448v85.312H627.072L512 776.64l-115.072 76.672H42.688V768h328.384L512 674.048z" })))
        } />;
      }

      export default SunRising;