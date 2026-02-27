// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TaskVisible = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M725.312 42.688H298.688V128H128v853.312h298.688V896H213.312V213.312h85.376v85.376h426.624v-85.376h85.376v341.376H896V128H725.312zM640 213.312H384V128h256zm32 640V768h106.688v85.312zm53.44 149.376c188.48 0 259.84-192 259.84-192s-71.424-192-259.84-192c-188.48 0-259.84 192-259.84 192s71.296 192 259.84 192m-.064-85.376c-111.616 0-165.12-106.624-165.12-106.624S613.504 704 725.376 704c111.808 0 165.12 106.688 165.12 106.688s-53.568 106.624-165.12 106.624" })))
        } />;
      }

      export default TaskVisible;