// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const LoadingColored = React.forwardRef<HTMLSpanElement, Omit<DMIconProps, 'icon'>>((props, ref) => {
        return <DMIcon ref={ref} {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: "url(#paint0_angular_8262_26634_clip_path)" },
        React.createElement("foreignObject", { width: 2442.86, height: 2442.86, x: -1221.43, y: -1221.43, transform: "rotate(90 0 8)scale(.007)" },
            React.createElement("div", { style: {
                    background: "conic-gradient(from 90deg,rgba(229,239,255,.6) 0deg,rgba(229,239,255,0) 360deg)",
                    height: "100%",
                    width: "100%",
                    opacity: 1,
                } }))),
    React.createElement("path", { d: "M13.45 8A5.45 5.45 0 1 0 8 13.45V15A7 7 0 1 1 8 1a7 7 0 0 1 0 14v-1.55A5.45 5.45 0 0 0 13.45 8" }),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "paint0_angular_8262_26634_clip_path" },
            React.createElement("path", { d: "M13.45 8A5.45 5.45 0 1 0 8 13.45V15A7 7 0 1 1 8 1a7 7 0 0 1 0 14v-1.55A5.45 5.45 0 0 0 13.45 8" })))))
        } />;
      })

      export default LoadingColored;