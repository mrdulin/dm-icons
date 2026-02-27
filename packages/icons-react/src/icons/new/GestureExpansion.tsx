// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const GestureExpansion = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M256 0h213.312v213.312H384v-67.648l-152.96 152.96h67.584V384H85.312V170.688h85.312v67.648l152.96-152.96H256zm181.12 322.816a117.568 117.568 0 1 1 235.072 0v126.016H721.6c20.864 0 41.344 5.504 59.328 16l154.624 90.304a117.63 117.63 0 0 1 52.352 138.752l-76.096 228.288a117.63 117.63 0 0 1-111.552 80.448H497.92c-36.48 0-71.04-16.96-93.248-45.952L221.248 718.144l40.192-60.288c18.368-27.52 51.776-40.96 84.096-33.792l91.52 20.352v-321.6zm117.504-32.256a32.256 32.256 0 0 0-32.256 32.256v428.032L330.496 708.16l-4.288 6.4L472.32 904.64a32.32 32.32 0 0 0 25.6 12.672h302.336c13.888 0 26.24-8.96 30.592-22.08l76.096-228.288a32.256 32.256 0 0 0-14.4-38.08l-154.624-90.24a32.3 32.3 0 0 0-16.32-4.48H586.88V322.816a32.256 32.256 0 0 0-32.256-32.256" })))
        } />;
      }

      export default GestureExpansion;