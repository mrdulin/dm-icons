// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Refresh = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M874.624 248.96A448 448 0 0 0 66.432 464.896l-4.48 42.432 84.928 8.896 4.48-42.432A362.752 362.752 0 0 1 819.648 320h-158.4v85.312H960V106.688h-85.376zm2.496 258.816-4.48 42.432A362.688 362.688 0 0 1 204.224 704h158.4v-85.312H64v298.624h85.312V775.04a448 448 0 0 0 808.192-215.936l4.48-42.432z" })))
        } />;
      }

      export default Refresh;