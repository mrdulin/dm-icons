// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const WealthFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M288 106.688h448V224c0 67.008-29.44 127.168-76.032 168.192a385.47 385.47 0 0 1 188.16 168.576l9.152 16.576a234.688 234.688 0 0 0-221.952 361.344h-336.64A170.69 170.69 0 0 1 128 768v-21.312a384.13 384.13 0 0 1 236.032-354.496A223.49 223.49 0 0 1 288 224zM981.312 768v-85.312H682.688V768zm0 170.688v-85.376H682.688v85.376z" })))
        } />;
      }

      export default WealthFilled;