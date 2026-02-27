// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SimCard = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M323.648 42.688H896v938.624H128v-743.04l195.648-195.52zM359.04 128 213.312 273.664V896h597.376V128H358.976zm-17.728 256h85.568v85.504h-85.568v-85.568zm256 0h85.504v85.504h-85.504v-85.568zm-42.624 0v213.312h-85.376V384zm-128 128v213.312h-85.376V512zm256 0v213.312h-85.376V512zm-213.44 128h85.504v85.504h-85.504v-85.568z" })))
        } />;
      }

      export default SimCard;