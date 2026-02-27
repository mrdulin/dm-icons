// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ChartAreaMulti = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M170.624 85.312v768h768v85.376H85.312V85.312zM896 174.336V776.96H256V514.496L537.088 258.88l126.656 147.712zM352.32 691.584h458.304v-161.92L651.456 688.832l-129.408-151.04zM810.624 408.96v-28.608l-151.68 151.68L529.536 381.12l-188.16 171.072v34.24L529.728 415.68 656.32 563.328z" })))
        } />;
      }

      export default ChartAreaMulti;