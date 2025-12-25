// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const ClearOutlined2 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 14 14", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: "currentColor", d: "M5.25.583h3.5v4.959h3.5v7.875H1.75V5.542h3.5zM6.417 1.75v4.958h-3.5v1.459h8.166V6.708h-3.5V1.75zm4.666 7.583H2.917v2.917h5.25V10.5h1.166v1.75h1.75z" })))
        } />;
      }

      export default ClearOutlined2;