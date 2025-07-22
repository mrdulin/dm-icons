// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const DoubleUpOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { fill: "currentColor", viewBox: "0 0 16 16", width: "1em", height: "1em", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M5.02 7.782a.743.743 0 1 1-1.052-1.053l3.506-3.51a.743.743 0 0 1 1.052 0l3.506 3.51a.745.745 0 0 1-1.052 1.053L8 4.798zm0 5a.743.743 0 1 1-1.052-1.053l3.506-3.51a.743.743 0 0 1 1.052 0l3.506 3.51a.745.745 0 0 1-1.052 1.053L8 9.798z" })))
        } />;
      }

      export default DoubleUpOutlined;