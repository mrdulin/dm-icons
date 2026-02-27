// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SimCardFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M896 42.688H323.648L128 238.336v743.04h768V42.624zM426.88 383.936v85.504h-85.632v-85.504zm42.432 213.376V384h85.376v213.312zm-128 128V512h85.376v213.312zm341.376 0h-85.376V512h85.376zM597.312 384h85.504v85.504h-85.504v-85.568zm-42.56 256v85.504h-85.504v-85.568h85.504z" })))
        } />;
      }

      export default SimCardFilled;