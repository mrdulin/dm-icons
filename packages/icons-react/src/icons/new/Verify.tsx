// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Verify = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 128h938.688v768H42.688zM128 213.312v597.376h768V213.312zm533.376 192a42.688 42.688 0 1 1 0 85.376 42.688 42.688 0 0 1 0-85.376m102.4 119.488a128 128 0 1 0-204.8 0 170.43 170.43 0 0 0-68.288 136.512V704H576v-42.688a85.312 85.312 0 0 1 170.688 0V704H832v-42.688c0-55.808-26.816-105.408-68.224-136.512M213.376 384h192v85.312h-192zm0 170.688h192V640h-192z" })))
        } />;
      }

      export default Verify;