// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ClearOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("path", { d: "M0 0h16v16H0z" }),
        React.createElement("path", { fill: "currentColor", d: "M8 1a2 2 0 0 1 2 2v.767h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.506l.759 6.108c.077.621-.263 1.125-.76 1.125H3.507c-.496 0-.836-.504-.759-1.125l.758-6.108H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4V3a2 2 0 0 1 2-2m2.982 6.767H5.017L4.304 13.5h1.463l.235-3.058a.75.75 0 0 1 .605-.678l.099-.013.102.001a.75.75 0 0 1 .69.806L7.27 13.5h4.424zm2.518-2.5h-11v1h11zM8 2.5a.5.5 0 0 0-.5.5v.75l.002.017H8.5V3a.5.5 0 0 0-.5-.5" }))))
        } />;
      }

      export default ClearOutlined;