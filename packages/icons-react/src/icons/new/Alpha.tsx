// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Alpha = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M597.312 85.312v164.992l227.712-138.24 44.288 72.96-272 165.12v366.4l272 165.12-44.288 72.96-227.712-138.24v122.24H512v-174.08L131.2 533.44 512 302.08V85.376h85.312zM512 401.92 295.552 533.376 512 664.768z" })))
        } />;
      }

      export default Alpha;