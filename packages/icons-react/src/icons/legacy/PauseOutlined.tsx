// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const PauseOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: "currentColor" },
        React.createElement("path", { d: "M6 14c0 .553-.358 1-.8 1H2.8c-.442 0-.8-.447-.8-1V2c0-.553.358-1 .8-1h2.4c.442 0 .8.447.8 1zM14 14c0 .553-.358 1-.8 1h-2.4c-.442 0-.8-.447-.8-1V2c0-.553.358-1 .8-1h2.4c.442 0 .8.447.8 1z" }))))
        } />;
      }

      export default PauseOutlined;