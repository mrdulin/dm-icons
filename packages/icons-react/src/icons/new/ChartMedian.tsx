// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ChartMedian = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M170.624 85.312v768h768v85.376H85.312V85.312zm512 102.592c-45.888 0-85.312 38.784-85.312 89.408v127.936h.192v85.504h-.192v130.944c0 98.816-71.232 188.992-170.688 188.992-99.392 0-170.624-90.176-170.624-188.992v-42.624h85.312v42.624c0 62.72 43.392 103.68 85.312 103.68 41.984 0 85.376-40.96 85.376-103.68V277.312c0-95.232 75.136-174.72 170.624-174.72 95.552 0 170.688 79.488 170.688 174.72V320H768v-42.688c0-50.624-39.488-89.408-85.376-89.408M256 405.184h85.504v85.504H256V405.12zm127.808 0h85.504v85.568h-85.504v-85.504zm256 0h85.504v85.568h-85.504v-85.504zm128.192 0h85.504v85.568H768v-85.504z" })))
        } />;
      }

      export default ChartMedian;