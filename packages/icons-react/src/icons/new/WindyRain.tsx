// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const WindyRain = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M554.624 213.312a42.688 42.688 0 0 0 0 85.376H768V384H554.624a128 128 0 1 1 0-256h170.688v85.312zm-320 128a64 64 0 0 0 0 128H512v85.376H234.624a149.312 149.312 0 0 1 0-298.688h106.688v85.312zm618.688-42.816h85.504V384h-85.504zm0 170.688h85.504v85.504h-85.504V469.12zm-256 .128H768v85.376H597.312zm85.312 170.496h85.504v85.504h-85.504zM213.312 768a128 128 0 0 1 128-128H384v85.312h-42.688a42.688 42.688 0 0 0 0 85.376h192V896h-192a128 128 0 0 1-128-128m256-128h128v85.312h-128z" })))
        } />;
      }

      export default WindyRain;