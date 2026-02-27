// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Shop4Filled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M896 298.688h42.624V384H896v469.312h42.624v85.376H704V704a192 192 0 0 0-384 0v234.688H85.312v-85.376H128V384H85.312v-85.312H128V256A170.69 170.69 0 0 1 298.624 85.312h426.688A170.69 170.69 0 0 1 896 256zm-597.376-128c-47.104 0-85.312 38.208-85.312 85.312v42.688h128v-128zm128 0v128h170.688v-128zm256 0v128h128V256c0-47.104-38.208-85.312-85.312-85.312zM512 597.312c-58.88 0-106.688 47.744-106.688 106.688v234.688h213.312V704c0-58.88-47.744-106.688-106.624-106.688" })))
        } />;
      }

      export default Shop4Filled;