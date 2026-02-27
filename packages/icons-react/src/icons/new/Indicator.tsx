// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Indicator = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M441.728 42.688v128h140.544v-128h85.312v128h80.64l174.784 128-174.72 128H667.52v90.048h271.04v256H667.52v208.64h-85.248v-208.64H441.728v208.64h-85.376v-208.64h-80.64l-174.72-128 174.72-128h80.64v-90.048H85.312v-256h271.04v-128zM170.624 256v85.312h549.76l58.24-42.688L720.384 256zm411.648 170.688H441.728v90.048h140.544zm-278.656 175.36-58.24 42.688 58.24 42.688h549.696v-85.376z" })))
        } />;
      }

      export default Indicator;