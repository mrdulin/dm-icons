// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Forest = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M298.624 9.152 512 563.776 725.312 9.152l275.456 716.16H768v213.376h-85.376V725.312H341.312v213.376H256V725.312H23.168zM341.312 640h108.544L341.312 357.76zM256 357.76 147.456 640H256zM574.08 640h108.544V357.76zM768 357.76V640h108.544z" })))
        } />;
      }

      export default Forest;