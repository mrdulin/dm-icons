// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Calculator1 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M170.688 85.312h682.688v853.376H170.688V85.376zM256 170.688v170.688h512V170.688zm512 256H640V512h128zm0 170.688H640v85.312h128zM768 768H640v85.376h128zm-213.312 85.376V768h-85.312v85.376zm-170.688 0V768H256v85.376zM256 682.688h128v-85.312H256zM256 512h128v-85.312H256zm213.376-85.312V512h85.312v-85.312zm85.312 170.688h-85.312v85.312h85.312z" })))
        } />;
      }

      export default Calculator1;