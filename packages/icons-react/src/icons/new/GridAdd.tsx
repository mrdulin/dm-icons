// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const GridAdd = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 85.312h384v384h-384zm85.312 85.376V384H384V170.688zm384-85.376h384v384h-384zM640 170.688V384h213.312V170.688zm-554.688 384h384v384h-384zM170.624 640v213.312H384V640zM704 576h85.312v128h128v85.312h-128v128H704v-128H576V704h128z" })))
        } />;
      }

      export default GridAdd;