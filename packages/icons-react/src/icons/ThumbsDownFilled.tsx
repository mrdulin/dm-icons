// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const ThumbsDownFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M2.72 10C1.92 10 1.122 9.7.623 9c-.5-.5-.699-1.3-.6-2.1l.8-4.6C1.022 1 2.12 0 3.417 0H12v8c-.1 0-2.395 7.5-2.395 7.5 0 .3-.3.5-.599.5-1.197 0-1.996-.5-1.996-2v-4zM16 8h-2V0h2z" })))
        } />;
      }

      export default ThumbsDownFilled;