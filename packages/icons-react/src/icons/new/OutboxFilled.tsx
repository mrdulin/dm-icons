// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const OutboxFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M938.624 85.312H85.312v853.376h853.312zm-768 533.376v-448h682.688v448h-211.84l-10.752 26.624a128 128 0 0 1-237.44 0l-10.816-26.624zM512 216.96 323.648 405.312 384 465.664l85.312-85.312v216.96h85.312v-216.96L640 465.664l60.352-60.352z" })))
        } />;
      }

      export default OutboxFilled;