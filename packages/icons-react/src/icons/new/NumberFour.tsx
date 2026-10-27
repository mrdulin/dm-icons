// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const NumberFour = React.forwardRef<HTMLSpanElement, Omit<DMIconProps, 'icon'>>((props, ref) => {
        return <DMIcon ref={ref} {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fillRule: "evenodd", d: "M11.236 9.114h1.233l-.261 1.853h-1.232l-.33 2.346H8.102l.33-2.346H4l.234-1.663L9.852 2h2.384zM8.948 5.359q-.168.285-.391.618L6.5 9.114h2.191l.359-2.551.262-1.41q.059-.301.074-.412h-.064q-.187.316-.375.618", clipRule: "evenodd" })))
        } />;
      })

      export default NumberFour;