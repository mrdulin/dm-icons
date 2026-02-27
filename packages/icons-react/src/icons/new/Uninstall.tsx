// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Uninstall = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 68.032 721.664 275.2l-60.032 60.736-107.008-105.792V533.44h-85.312V230.08L362.304 336l-59.968-60.8L512 67.968zM85.312 85.312H320v85.376H170.624v426.624h682.688V170.688H704V85.312h234.624v853.376H85.312zm768 597.376H170.624v170.624h682.688zm-597.44 42.56h85.504v85.504h-85.504zm128 0h85.504v85.504h-85.504z" })))
        } />;
      }

      export default Uninstall;