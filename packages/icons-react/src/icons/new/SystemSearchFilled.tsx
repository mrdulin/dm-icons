// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SystemSearchFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M981.376 85.312H42.688V768h449.728a286.7 286.7 0 0 1 33.792-170.752H128V170.56h768v302.4c32 14.272 60.8 34.176 85.376 58.496V85.376zM128 853.312h387.584c14.272 32 34.176 60.8 58.496 85.376H128zM981.376 736c0 40.512-11.904 78.208-32.384 109.888l71.36 71.488-60.416 60.288-71.232-71.424A202.688 202.688 0 1 1 981.376 736M896 736a117.312 117.312 0 1 0-34.624 83.2l.384-.32C882.88 797.632 896 768.32 896 736" })))
        } />;
      }

      export default SystemSearchFilled;