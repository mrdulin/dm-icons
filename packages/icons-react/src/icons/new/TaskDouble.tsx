// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TaskDouble = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M682.624 640H469.312v-85.312h213.312zM512 85.312V0h-85.376v85.312H256v725.376h640V85.312H725.312V0H640v85.312zM640 256h85.312v-85.312h85.312v554.624H341.312V170.688h85.312V256H512v-85.312h128zM170.624 896V256H85.312v725.312H640V896z" })))
        } />;
      }

      export default TaskDouble;