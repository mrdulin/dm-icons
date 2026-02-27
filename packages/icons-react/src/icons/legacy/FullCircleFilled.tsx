// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FullCircleFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 18 18", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("circle", { cx: 9, cy: 9, r: 9, fill: "currentColor", fillOpacity: 0.2 }),
    React.createElement("path", { fill: "currentColor", d: "M8.688 3.232h.624a17.1 17.1 0 0 0 5.22 3.732l-.432.768c-1.992-.96-3.684-2.196-5.1-3.72Q7.038 6.19 3.852 7.792l-.42-.756c2.112-1.02 3.864-2.292 5.256-3.804M5.652 7.024h6.696v.828H9.444V9.94h3.468v.828H9.444v2.22h4.56v.852H4.008v-.852h4.548v-2.22h-3.48V9.94h3.48V7.852H5.652z" })))
        } />;
      }

      export default FullCircleFilled;