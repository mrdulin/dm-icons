// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SupportFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M211.712 151.296 410.24 349.824c62.016-39.04 141.568-39.04 203.584 0l198.528-198.528a469.44 469.44 0 0 0-600.64 0m660.992 60.352L674.176 410.24c39.04 62.08 39.04 141.632 0 203.648l198.528 198.528a469.44 469.44 0 0 0 0-600.704zm-60.352 661.056L613.824 674.176c-62.016 39.04-141.568 39.04-203.584 0L211.648 872.704a469.44 469.44 0 0 0 600.704 0M151.36 812.352l198.528-198.528a191.68 191.68 0 0 1 0-203.648L151.36 211.648a469.44 469.44 0 0 0 0 600.704" })))
        } />;
      }

      export default SupportFilled;