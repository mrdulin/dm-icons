// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Chart3D = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m512 36.032 412.16 238.016v475.904L512 987.904 99.84 749.952V274.048zm0 98.56L227.84 298.688 512 462.72l284.16-164.032zm326.848 237.952L554.688 536.64v328.128l284.16-164.096zm-369.536 492.16v-328L185.152 372.48v328.128zm85.312-651.328V384h-85.312V213.312h85.312zm-132.16 399.552-147.84 85.376L232 624.384l147.84-85.312zm221.696-73.856L792 624.384l-42.688 73.92-147.84-85.376z" })))
        } />;
      }

      export default Chart3D;