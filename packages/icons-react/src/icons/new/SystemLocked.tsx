// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SystemLocked = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 85.312h938.688v341.376H896v-256H128v512h426.688V768h-512zM832.064 576c29.44 0 53.376 23.872 53.376 53.312v32H778.752v-32c0-29.44 23.872-53.312 53.312-53.312m138.688 85.312v-32a138.688 138.688 0 0 0-277.312 0v32H640v277.376h384V661.312zm-32.064 85.376v106.624H725.376V746.688zM128 853.312h426.688v85.376H128z" })))
        } />;
      }

      export default SystemLocked;