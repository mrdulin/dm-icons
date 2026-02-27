// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Tape = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 128h938.688v768H42.688zM128 213.312v597.376h768V213.312h-62.464l-85.376 128H275.84l-85.312-128zm165.12 0L321.472 256h380.992l28.416-42.688zM341.312 512a42.688 42.688 0 1 0 0 85.312 42.688 42.688 0 0 0 0-85.312m-128 42.688a128 128 0 1 1 256 0 128 128 0 0 1-256 0M682.688 512a42.688 42.688 0 1 0 0 85.312 42.688 42.688 0 0 0 0-85.312m-128 42.688a128 128 0 1 1 256 0 128 128 0 0 1-256 0" })))
        } />;
      }

      export default Tape;