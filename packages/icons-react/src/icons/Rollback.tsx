// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const Rollback = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M7.452 12.063c.358.358.36.938.002 1.295a.916.916 0 0 1-1.295-.002L.26 7.455A.916.916 0 0 1 .255 6.16L6.137.278a.916.916 0 0 1 1.295.003c.359.358.36.938.003 1.295L3.109 5.9h6.643c3.39 0 6.127 2.863 6.244 6.414l.004.237v2.532c0 .506-.41.917-.914.917a.916.916 0 0 1-.915-.917V12.55c0-2.673-1.993-4.816-4.419-4.816H3.124Z" })))
        } />;
      }

      export default Rollback;