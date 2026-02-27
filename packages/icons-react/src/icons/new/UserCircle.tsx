// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const UserCircle = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 128a384 384 0 0 0-308.288 612.928 213.44 213.44 0 0 1 201.6-143.616h213.376c93.44 0 172.8 60.032 201.664 143.616A384 384 0 0 0 512 128m234.688 688v-5.376a128 128 0 0 0-128-128H405.376a128 128 0 0 0-128 128v5.312A382.14 382.14 0 0 0 512 896a382.14 382.14 0 0 0 234.688-80m-704-304a469.312 469.312 0 1 1 938.688 0 469.312 469.312 0 0 1-938.688 0M512 256a106.688 106.688 0 1 0 0 213.312A106.688 106.688 0 0 0 512 256M320 362.688a192 192 0 1 1 384 0 192 192 0 0 1-384 0" })))
        } />;
      }

      export default UserCircle;