// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CrookedSmile = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768M42.688 512a469.312 469.312 0 1 1 938.688 0 469.312 469.312 0 0 1-938.688 0M384 341.312V512h-85.312V341.312zm341.376 0V512H640V341.312zm-12.032 246.656-10.688 41.344c-11.52 44.608-33.856 80.832-68.864 105.28C599.424 758.592 557.44 768 512 768h-42.624v-85.312H512c34.176 0 57.344-7.168 72.96-18.048 15.104-10.56 27.584-27.584 35.072-56.64l10.624-41.28z" })))
        } />;
      }

      export default CrookedSmile;