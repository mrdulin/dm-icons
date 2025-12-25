// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const ViewpointFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("path", { d: "M0 0h16v16H0z" }),
        React.createElement("path", { fill: "currentColor", d: "M13.442 1H2.558C1.698 1 1 1.697 1 2.558v10.884C1 14.302 1.699 15 2.558 15h10.884c.86 0 1.558-.697 1.558-1.558V2.558C15 1.697 14.303 1 13.442 1M2.8 4h5.4a.8.8 0 1 1 0 1.6H2.8a.8.8 0 1 1 0-1.6m9.876 1.741.885.64a.87.87 0 0 1 .173 1.253l-2.914 3.719a.94.94 0 0 1-.338.27l-2.06.96a.38.38 0 0 1-.382-.036.35.35 0 0 1-.14-.344l.389-2.17a.9.9 0 0 1 .179-.388l2.907-3.718a.955.955 0 0 1 1.3-.186M6.2 7a.8.8 0 1 1 0 1.6H2.8a.8.8 0 1 1 0-1.6z" }))))
        } />;
      }

      export default ViewpointFilled;