// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ClockCircleTwoTone = React.forwardRef<HTMLSpanElement, Omit<DMIconProps, 'icon'>>((props, ref) => {
        return <DMIcon ref={ref} {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: "#B2B5B6", fillOpacity: 0.4, fillRule: "evenodd", d: "M12 0a12 12 0 1 1 0 24 12 12 0 1 1 0-24m0 1a11 11 0 1 0 0 22 11 11 0 1 0 0-22" }),
    React.createElement("circle", { cx: 12, cy: 12, r: 8.5, fill: "#979797" }),
    React.createElement("path", { fill: "#FFF", d: "M11 8h2v3.5h3.5v2H11Z" })))
        } />;
      })

      export default ClockCircleTwoTone;