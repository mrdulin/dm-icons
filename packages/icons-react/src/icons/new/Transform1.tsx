// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Transform1 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 85.312h256v85.376h341.312V85.376h256v256h-85.312v341.312h85.312v256h-256v-85.312H341.312v85.312h-256v-256h85.312V341.376H85.312v-256zm170.688 256v341.376h85.312V768h341.312v-85.312H768V341.376h-85.376V256H341.312v85.312zm0-170.624h-85.376V256H256zM853.312 256v-85.312H768V256zM768 768v85.376h85.312V768zm-512 85.376V768h-85.376v85.376z" })))
        } />;
      }

      export default Transform1;