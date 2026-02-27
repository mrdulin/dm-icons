// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ThumbUp2Filled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m523.52 99.648-73.216-24.32-158.08 355.584v507.776h453.76a128 128 0 0 0 126.464-108.544l50.56-328.576A128 128 0 0 0 796.48 354.112H631.424V249.408c0-67.904-43.52-128.256-107.904-149.76M85.312 430.912v507.776h121.6V430.912z" })))
        } />;
      }

      export default ThumbUp2Filled;