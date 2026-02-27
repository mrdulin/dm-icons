// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ShareFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M917.312 192a149.312 149.312 0 0 1-252.096 108.352l-306.56 177.024a149.76 149.76 0 0 1 0 69.248l306.56 177.024a149.312 149.312 0 1 1-42.56 73.92l-306.752-176.96a149.312 149.312 0 1 1 0-217.024l306.816-177.28A149.312 149.312 0 1 1 917.312 192" })))
        } />;
      }

      export default ShareFilled;