// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ReplayFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M981.376 597.312 793.6 456.512l51.2-68.224 39.68 29.696A384 384 0 1 0 864.128 665.6l17.024-39.104 78.208 34.176-17.088 39.04A469.44 469.44 0 0 1 42.688 512a469.312 469.312 0 0 1 938.688 0zM716.928 512 405.376 719.744V304.256z" })))
        } />;
      }

      export default ReplayFilled;