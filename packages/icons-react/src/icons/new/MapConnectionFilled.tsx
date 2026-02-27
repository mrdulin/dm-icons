// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MapConnectionFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 256a170.688 170.688 0 0 1 336-42.688H771.52l3.456.64c26.752 4.48 65.664 17.28 98.944 42.88C908.352 283.2 938.624 324.864 938.624 384s-30.272 100.864-64.64 127.232c-33.344 25.536-72.32 38.4-99.008 42.88l-3.456.576H256c-10.112 0-32.96 6.336-53.376 22.656-19.072 15.232-32 35.84-32 62.72 0 26.752 12.928 47.36 32 62.656 20.416 16.32 43.264 22.656 53.376 22.656h469.312V618.688L924.416 768 725.312 917.376V810.688H256c-32.64 0-73.728-15.04-106.688-41.344-34.24-27.456-64-70.784-64-129.28 0-58.56 29.76-101.952 64-129.344 32.96-26.368 74.112-41.408 106.688-41.408h508.16c16-3.2 39.104-11.52 57.856-25.856 18.944-14.528 31.296-33.28 31.296-59.456 0-26.24-12.352-44.928-31.296-59.52a148.2 148.2 0 0 0-57.856-25.792H421.248A170.752 170.752 0 0 1 85.312 256" })))
        } />;
      }

      export default MapConnectionFilled;