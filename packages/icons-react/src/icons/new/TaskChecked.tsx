// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TaskChecked = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M298.688 42.688h426.624V128H896v469.312h-85.312v-384h-85.376v85.376H298.688v-85.376h-85.376V896h256v85.312H128V128h170.688zM384 213.312h256V128H384zm625.344 494.336-301.696 301.696-180.992-180.992L587.008 768l120.64 120.704L949.056 647.36z" })))
        } />;
      }

      export default TaskChecked;