// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const LogoCodepen = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 34.432 981.376 339.52v344.96L512 989.568 42.688 684.48V339.52zM128 444.608v134.784L224.256 512zm33.6 215.424 307.776 200V683.52L298.688 564.096zM373.12 512 512 609.28 650.944 512l-138.88-97.28zm181.568-171.52 170.688 119.424L862.4 363.968l-307.712-200v176.448zm-85.312-176.576L161.6 363.968l137.088 96 170.688-119.552V163.968zM896 444.608 799.744 512 896 579.392zm-33.6 215.424-137.024-96L554.688 683.52v176.512z" })))
        } />;
      }

      export default LogoCodepen;