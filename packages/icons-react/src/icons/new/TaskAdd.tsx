// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TaskAdd = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M298.688 42.688h426.624V128H896v384h-85.312V213.312h-85.376v85.376H298.688v-85.376h-85.376V896H512v85.312H128V128h170.688zM384 213.312h256V128H384zm469.312 384V768H1024v85.312H853.312V1024H768V853.312H597.312V768H768V597.312z" })))
        } />;
      }

      export default TaskAdd;