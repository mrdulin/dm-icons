// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ObjectStorage = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 170.688A213.31 213.31 0 0 0 298.688 384v85.312H256c-33.28 0-76.992 12.928-111.744 41.152C110.848 537.6 85.376 579.072 85.376 640c0 60.352 26.24 101.888 60.48 129.344 35.712 28.608 79.68 41.344 110.144 41.344 41.536 0 95.552-.64 139.2-22.272 20.736-10.24 38.4-24.96 51.392-46.784 12.992-22.08 22.72-54.144 22.72-101.632v-46.336l-64 64-60.288-60.352L512 430.272l167.04 167.04-60.352 60.352-64-64V640c0 59.2-12.224 107.072-34.688 145.024-22.528 38.144-53.76 63.488-87.04 79.872C370.048 896.064 297.664 896 258.304 896H256c-49.856 0-112.576-19.328-163.456-60.032C40.32 794.112 0 729.024 0 640c0-88.448 38.528-153.6 90.432-195.84a275.1 275.1 0 0 1 122.88-56.192V384a298.688 298.688 0 0 1 597.376 0v3.968a275.1 275.1 0 0 1 122.88 56.256C985.472 486.4 1024 551.552 1024 640c0 88.576-38.656 154.24-94.08 196.544C875.904 877.888 807.68 896 746.688 896H576v-85.312h170.688c45.632 0 94.72-13.888 131.392-41.92 35.264-26.944 60.608-68.032 60.608-128.768 0-60.928-25.536-102.4-58.88-129.536C845.056 482.24 801.28 469.312 768 469.312h-42.688V384A213.31 213.31 0 0 0 512 170.688" })))
        } />;
      }

      export default ObjectStorage;