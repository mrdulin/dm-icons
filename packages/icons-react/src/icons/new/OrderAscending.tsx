// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const OrderAscending = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m810.624 110.08 188.352 188.352-60.352 60.352-85.312-85.376v579.648H768V273.408l-85.376 85.376-60.288-60.352zM85.312 170.432h469.312v85.312H85.312zm0 298.624H640v85.376H85.312zm0 298.688H640v85.312H85.312z" })))
        } />;
      }

      export default OrderAscending;