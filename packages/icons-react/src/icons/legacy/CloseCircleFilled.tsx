// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CloseCircleFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m1.432-7.982 2.293-2.293c.943-.943-.471-2.357-1.414-1.414L8.018 6.604 5.725 4.31c-.943-.943-2.357.471-1.414 1.414l2.293 2.293-2.293 2.293c-.943.943.471 2.357 1.414 1.414l2.293-2.293 2.293 2.293c.943.943 2.357-.471 1.414-1.414z" })))
        } />;
      }

      export default CloseCircleFilled;