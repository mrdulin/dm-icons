// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const PantoneFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m747.776 190.08 89.472-30.528 81.728 239.04h62.4v497.792H42.688V398.592h70.464L612.16 0zm-84.352 28.8-68.416-96-260.416 208zm53.12 72L400.512 398.592h428.16l-44.16-129.472-68.096 21.76zM225.472 604.672v85.504h85.568v-85.504h-85.504z" })))
        } />;
      }

      export default PantoneFilled;