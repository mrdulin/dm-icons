// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Cpu = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M384 21.312V128h256V21.312h85.312V128H896v170.688h106.624V384H896v256h106.624v85.312H896V896H725.312v106.688H640V896H384v106.688h-85.376V896H128V725.312H21.312V640H128V384H21.312v-85.312H128V128h170.624V21.312zm-170.688 192v597.376h597.312V213.312zm128 128h341.312v341.376H341.312zm85.312 85.376v170.624h170.688V426.688z" })))
        } />;
      }

      export default Cpu;