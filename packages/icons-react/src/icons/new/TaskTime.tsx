// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TaskTime = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M298.688 42.688h426.624V128H896v341.312h-85.312v-256h-85.376v85.376H298.688v-85.376h-85.376V896h256v85.312H128V128h170.688zM384 213.312h256V128H384zm384 405.376a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M533.312 768a234.688 234.688 0 1 1 469.376 0 234.688 234.688 0 0 1-469.376 0m277.376-95.936v78.272l60.352 60.352-60.352 60.352-85.376-85.376v-113.6z" })))
        } />;
      }

      export default TaskTime;