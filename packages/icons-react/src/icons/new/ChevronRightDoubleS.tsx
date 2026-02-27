// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ChevronRightDoubleS = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M764.16 512 553.024 723.2l-60.352-60.352L643.52 512 492.672 361.152l60.352-60.352 211.2 211.2zm-232.96 0L320 723.2l-60.288-60.352L410.56 512 259.712 361.152 320 300.8z" })))
        } />;
      }

      export default ChevronRightDoubleS;