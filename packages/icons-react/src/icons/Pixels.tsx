import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const Pixels = (props: DMIconProps) => {
        return <DMIcon {...props} icon={({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: "none" },
        React.createElement("path", { d: "M0 0h16v16H0z" }),
        React.createElement("path", { fill: "#B8CAE6", d: "M3.667 10.667h.666a1 1 0 0 1 1 1v.666a1 1 0 0 1-1 1h-.666a1 1 0 0 1-1-1v-.666a1 1 0 0 1 1-1m0-4h.666a1 1 0 0 1 1 1v.666a1 1 0 0 1-1 1h-.666a1 1 0 0 1-1-1v-.666a1 1 0 0 1 1-1m4 4h.666a1 1 0 0 1 1 1v.666a1 1 0 0 1-1 1h-.666a1 1 0 0 1-1-1v-.666a1 1 0 0 1 1-1m-4-8h.666a1 1 0 0 1 1 1v.666a1 1 0 0 1-1 1h-.666a1 1 0 0 1-1-1v-.666a1 1 0 0 1 1-1m8 8h.666a1 1 0 0 1 1 1v.666a1 1 0 0 1-1 1h-.666a1 1 0 0 1-1-1v-.666a1 1 0 0 1 1-1" }),
        React.createElement("rect", { width: 2.667, height: 2.667, x: 6.667, y: 6.667, fill: "#B8CAE6", opacity: 0.3, rx: 1 }))))} />;
      }

      export default Pixels;