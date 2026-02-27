// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CloseCircleFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 981.312a469.312 469.312 0 1 0 0-938.624 469.312 469.312 0 0 0 0 938.624M376.32 315.904 512 451.648l135.744-135.68 60.352 60.288L572.352 512l135.744 135.744-60.352 60.352-135.68-135.744-135.808 135.744-60.352-60.288L451.648 512 315.904 376.32l60.352-60.352z" })))
        } />;
      }

      export default CloseCircleFilled;