import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const Excel = (props: DMIconProps) => {
        return <DMIcon {...props} icon={({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: "none", fillRule: "nonzero" },
        React.createElement("path", { d: "M0 0h16v16H0z" }),
        React.createElement("path", { fill: "#0E512B", d: "M14.957 9.043H1.043L0 7.653 1.391 6.26H14.61L16 7.652z" }),
        React.createElement("path", { fill: "#E6E6E6", d: "M13.913 16H2.087a.695.695 0 0 1-.696-.696V.696c0-.385.312-.696.696-.696h8.348l4.174 4.174v11.13a.695.695 0 0 1-.696.696" }),
        React.createElement("path", { fill: "#B3B3B3", d: "M10.435 0v3.478c0 .385.311.696.695.696h3.479z" }),
        React.createElement("path", { fill: "#1B7343", d: "M15.304 13.913H.696A.695.695 0 0 1 0 13.217V7.652h16v5.565a.695.695 0 0 1-.696.696" }),
        React.createElement("path", { fill: "#FFF", d: "M5.771 12.174h-.854l-.532-.854-.527.854h-.835l.906-1.398-.852-1.334h.819l.493.845.474-.845h.843l-.865 1.392zM6.078 12.174V9.442h.738v2.136h1.051v.596zM10.09 11.344q0 .255-.129.451a.84.84 0 0 1-.371.307q-.243.11-.57.11-.272 0-.458-.04a1.7 1.7 0 0 1-.385-.133v-.657q.211.108.44.169.226.06.418.06.165 0 .24-.057a.18.18 0 0 0 .077-.146q0-.057-.03-.098a.4.4 0 0 0-.1-.085 4 4 0 0 0-.363-.176 1.7 1.7 0 0 1-.4-.235.7.7 0 0 1-.198-.262.9.9 0 0 1-.065-.35.7.7 0 0 1 .275-.588q.275-.21.755-.21.423 0 .865.195l-.226.57q-.384-.175-.662-.175-.143 0-.209.05a.15.15 0 0 0-.065.125q0 .081.083.144.082.063.451.232.353.16.49.34a.74.74 0 0 1 .137.46M12.973 12.174h-.854l-.532-.854-.527.854h-.835l.906-1.398-.852-1.334h.819l.493.845.474-.845h.843l-.865 1.392z" }))))} />;
      }

      export default Excel;