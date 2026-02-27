// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const RelatedOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("path", { d: "M0 0h16v16H0z" }),
        React.createElement("path", { fill: "currentColor", fillRule: "nonzero", d: "M14.067 13.997H6.6a.933.933 0 0 1-.933-.934v-5.6c0-.515.418-.933.933-.933H8a.467.467 0 0 1 0 .933H6.6v5.6h7.467v-5.6h-2.334a.467.467 0 1 1 0-.933h2.334c.515 0 .933.418.933.933v5.6a.933.933 0 0 1-.933.934M9.4 9.467H8a.467.467 0 0 1 0-.934h1.4v-5.6H1.933v5.6h2.334a.467.467 0 1 1 0 .934H1.933A.933.933 0 0 1 1 8.533v-5.6C1 2.418 1.418 2 1.933 2H9.4c.515 0 .933.418.933.933v5.6a.933.933 0 0 1-.933.934" }))))
        } />;
      }

      export default RelatedOutlined;