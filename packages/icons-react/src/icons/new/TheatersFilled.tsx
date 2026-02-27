// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TheatersFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M938.624 938.688H85.312V85.312h853.312zm-85.312-768H746.624v106.624h106.688zm0 192H746.624v106.624h106.688zm0 192H746.624v106.624h106.688zm-106.688 192v106.624h106.688V746.688zm-469.312-576H170.624v106.624h106.688zm0 192H170.624v106.624h106.688zm0 192H170.624v106.624h106.688zm0 192H170.624v106.624h106.688z" })))
        } />;
      }

      export default TheatersFilled;