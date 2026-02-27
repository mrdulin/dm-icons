// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MusicRectangleAdd = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 85.312h853.312v469.376h-85.312v-384H170.624v682.624h384v85.376H85.312zM512 298.688h170.624V384h-85.312v213.312A128 128 0 1 1 512 476.608zm0 298.624a42.688 42.688 0 1 0-85.376 0 42.688 42.688 0 0 0 85.376 0M853.312 640v128h128v85.312h-128v128H768v-128H640V768h128V640z" })))
        } />;
      }

      export default MusicRectangleAdd;