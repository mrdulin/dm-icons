// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Gamepad1 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M469.312 170.688c0-47.168 38.208-85.376 85.312-85.376h170.688v85.376H554.624V256h384v597.312H85.312V256h384zM170.624 341.312V768h682.688V341.312zM384 426.688V512h85.312v85.312H384v85.376h-85.376v-85.376h-85.312V512h85.312v-85.312zm256 0h85.44V512h85.376v85.504H725.44v85.312H640v-85.312h-85.376V512H640zm.128 85.504v85.12h85.184v-85.12z" })))
        } />;
      }

      export default Gamepad1;