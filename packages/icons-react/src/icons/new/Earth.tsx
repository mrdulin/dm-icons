// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Earth = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M134.016 443.968 400.064 534.4l-136.32 270.592a384 384 0 0 0 631.232-264.32l-14.208 8.256-187.136 216.896-84.8-172.032-140.544-47.552V372.672l-73.984-25.024-86.272 87.488-155.392-58.624c-8.192 21.632-14.464 44.16-18.56 67.456zm57.728-143.936 94.464 35.648 84.8-86.016 182.656 61.76v173.504l116.032 39.296 43.52 88.192L825.6 482.304l64.64-37.568a384.128 384.128 0 0 0-698.432-144.64zm9.984 438.272 77.952-154.752-151.04-51.328a382.1 382.1 0 0 0 73.152 206.08zM42.688 512a469.312 469.312 0 1 1 938.688 0 469.312 469.312 0 0 1-938.688 0" })))
        } />;
      }

      export default Earth;