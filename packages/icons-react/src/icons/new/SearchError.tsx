// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SearchError = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M644.096 251.904a277.312 277.312 0 0 0-473.408 196.224v42.688H85.376v-42.624a362.688 362.688 0 1 1 647.552 224.32l227.968 228.032-60.352 60.352-228.032-228.032A361.8 361.8 0 0 1 448 810.688h-42.624v-85.376H448a277.312 277.312 0 0 0 196.096-473.408m-572.8 313.728L192 686.336l120.704-120.704 60.352 60.352-120.704 120.704 120.704 120.64-60.352 60.352L192 807.04 71.36 927.68l-60.352-60.352 120.64-120.64L11.008 625.92l60.352-60.352z" })))
        } />;
      }

      export default SearchError;