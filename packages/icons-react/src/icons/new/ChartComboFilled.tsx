// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ChartComboFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M170.624 85.312v768h128v-256H512v256h128v-384h213.312v384h85.312v85.376H85.312V85.312zm540.8 73.728 195.072 195.072-60.352 60.352-134.976-134.976L421.824 567.04 225.792 371.072l60.352-60.352 135.872 135.872L711.36 159.04z" })))
        } />;
      }

      export default ChartComboFilled;