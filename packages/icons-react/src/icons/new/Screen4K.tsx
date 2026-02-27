// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Screen4K = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 128h938.688v768H42.688zM128 213.312v597.376h768V213.312zm512 128v87.36l42.688-30.144v-57.216H768V409.6a64 64 0 0 1-27.008 52.224L670.016 512l70.976 50.24A64 64 0 0 1 768 614.4v68.224h-85.312v-57.216L640 595.328v87.36h-85.312V341.312zm-341.312 0V487.68H384V341.312h85.376v341.376H384v-109.76h-85.312a85.31 85.31 0 0 1-85.312-85.248V341.312z" })))
        } />;
      }

      export default Screen4K;