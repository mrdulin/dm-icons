// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const PieChartFilled2 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: "url(#clip0_13380_12516)" },
        React.createElement("path", { d: "M7.926 7.904h5.917v.65c0 3.673-2.937 6.651-6.558 6.651S.728 12.227.728 8.555s2.936-6.65 6.557-6.65h.641z" }),
        React.createElement("path", { fillRule: "evenodd", d: "M9.5.611c3.077 0 5.572 2.53 5.572 5.65v.651H8.86v-6.3zm.642 5h3.6c-.279-1.881-1.745-3.369-3.6-3.651z", clipRule: "evenodd" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "clip0_13380_12516" },
            React.createElement("path", { d: "M0 0h16v16H0z" })))))
        } />;
      }

      export default PieChartFilled2;