// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Subtitle = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 128h938.688v768H42.688zM128 213.312v597.376h768V213.312zm85.376 213.376c0-47.168 38.208-85.376 85.312-85.376h170.688v85.376H298.688v170.624h170.688v85.376H298.688a85.31 85.31 0 0 1-85.312-85.376zm341.312 0c0-47.168 38.208-85.376 85.312-85.376h170.688v85.376H640v170.624h170.688v85.376H640a85.31 85.31 0 0 1-85.312-85.376z" })))
        } />;
      }

      export default Subtitle;