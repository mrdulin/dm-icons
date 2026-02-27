// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const BaseStation = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m270.72 167.68-30.208 30.144a384 384 0 0 0 0 543.04l30.144 30.208-60.352 60.352-30.144-30.208a469.31 469.31 0 0 1 0-663.68l30.144-30.208 60.352 60.352zm542.912-60.352 30.208 30.144a469.31 469.31 0 0 1 0 663.744l-30.208 30.208-60.288-60.352 30.144-30.208a384 384 0 0 0 0-543.04l-30.144-30.144zM406.4 303.424l-30.144 30.144a192 192 0 0 0 0 271.552l30.144 30.144-60.352 60.352-30.144-30.144a277.31 277.31 0 0 1 0-392.192l30.144-30.208zm271.488-60.352 30.208 30.144a277.376 277.376 0 0 1 0 392.256l-30.208 30.144-60.352-60.352 30.208-30.144a192 192 0 0 0 0-271.552l-30.208-30.144zm-251.264 226.24a85.312 85.312 0 1 1 128 73.92v438.08h-85.312v-438.08a85.31 85.31 0 0 1-42.688-73.92" })))
        } />;
      }

      export default BaseStation;