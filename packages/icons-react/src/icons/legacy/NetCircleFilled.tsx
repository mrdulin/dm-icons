// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const NetCircleFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 18 18", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("circle", { cx: 9, cy: 9, r: 9, fill: "currentColor", fillOpacity: 0.2 }),
    React.createElement("path", { fill: "currentColor", d: "M4.308 3.604C5.1 4.636 5.7 5.548 6.12 6.328l-.72.492q-.648-1.242-1.8-2.772zm1.188 4.992.78.312a49 49 0 0 1-1.884 4.968l-.816-.36a43 43 0 0 0 1.92-4.92m7.908 2.52H10.62v1.932c0 .72-.36 1.092-1.056 1.092H7.8l-.168-.816c.576.036 1.116.06 1.644.06.336 0 .516-.192.516-.552v-1.716h-2.52v-.768h2.52V9.136H6.804v-.768h2.988V7.18H7.38v-.768h2.868c.444-.408.888-.876 1.32-1.416H9.012q-.882.9-2.196 1.62l-.504-.672c1.488-.756 2.484-1.68 3.012-2.772l.852.108a5.6 5.6 0 0 1-.528.948H12.6v.636a12 12 0 0 1-1.356 1.548h2.16v1.956h1.08v.768h-1.08zM10.62 7.18v1.188h1.992V7.18zm0 1.956v1.212h1.992V9.136z" })))
        } />;
      }

      export default NetCircleFilled;