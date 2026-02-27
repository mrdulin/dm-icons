// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SystemRegulation = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 85.312h938.688V768H42.688zM128 170.688v512h768v-512zM384 256v170.688h-85.312V256zm170.688 0v85.312h-85.312V256zm170.688 0v170.688H640V256zM554.688 384v213.312h-85.312V384zM384 469.312v128h-85.312v-128zm341.376 0v128H640v-128zM128 853.312h768v85.376H128z" })))
        } />;
      }

      export default SystemRegulation;