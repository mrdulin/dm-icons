// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TaskLocation = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M298.688 42.688h426.624V128H896v320h-85.312V213.312h-85.376v85.376H298.688v-85.376h-85.376V896h384v85.312H128V128h170.688zM384 213.312h256V128H384zm416 384c-64.768 0-117.312 52.544-117.312 117.376 0 53.44 31.36 104.704 68.864 145.984 17.408 19.136 34.88 34.752 48.448 45.824 13.568-11.072 31.04-26.688 48.448-45.824 37.568-41.28 68.864-92.544 68.864-145.984 0-64.832-52.48-117.376-117.312-117.376m0 413.952c-10.688-7.168-21.568-14.08-32-21.632a547.6 547.6 0 0 1-79.552-71.552c-42.432-46.656-91.136-118.016-91.136-203.392a202.688 202.688 0 0 1 405.376 0c0 85.376-48.64 156.736-91.136 203.392A547.6 547.6 0 0 1 832 989.632c-10.432 7.616-21.312 14.464-32 21.632m-53.312-328.576h106.624V768H746.688z" })))
        } />;
      }

      export default TaskLocation;